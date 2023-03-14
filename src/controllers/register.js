import bcrypt from "bcrypt"
import User from "../models/user.js"

const register = async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10) 
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword,
    })
    user.save()
        .then((data) => {
            res.status(201).json({ status : 201, message: 'Utilisateur enregister avec succes !', data})
        })
        .catch((error)=>{
            console.log(error);
            res.status(400).json({status : 400, error, message: "Erreur d'enregistrement"})
        })
}

export default register