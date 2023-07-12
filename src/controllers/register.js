import bcrypt from "bcrypt"
import User from "../models/user.js"
import registerValidator from "../validator/user.register.validator.js"

const register = async(req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const validate = await registerValidator.validateAsync({...req.body})
    if (validate) {       
        const user = new User({
            name,
            email,
            password : hashedPassword,
        })
        user.save()
            .then((data) => {
                res.status(201).json({ status : 201, message: 'Utilisateur enregister avec succes !', data})
            })
            .catch((error)=>{
                console.log(error);
                res.status(400).json({status : 400, error, message: "Erreur d'enregistrement ! Verifie votre adresse mail, il se peut qu'il existe déjà !!!!"})
            })
    } else {
        res.status(500).json({ message : "Les données que vous avez entré sont pas correct !" })
    } 
}

export default register