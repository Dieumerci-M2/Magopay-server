import bcrypt from "bcrypt"
import User from "../models/user.js";
import token from "../config/token.js";
import loginValidator from "../validator/user.login.validator.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body        
        const user = await User.findOne({ email })
        const validate = loginValidator.validateAsync({ ...req.body })
        if (validate) {
            if(!user){
                res.status(400).json({
                    message : "This user doen't exists !"
                })
            }
            const checkedpassword = await bcrypt.compare(password, user.password)
            if(!checkedpassword){
                res.status(400).json({
                    message : "Password incorrect ! !"
                })  
            }
    
            if(user && checkedpassword){
                res.status(201).json({
                    id : user._id,
                    name : user.name,
                    email : user.email,
                    token : token()
                })
            }            
        } else {
            res.status(500).json({ message : "Les données que vous avez entré sont pas correct !" })
        }
    } catch (error) {
        res.status(500).json({ message : "erreur serveur"});
    }

}

export default login;


