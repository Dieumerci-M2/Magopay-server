import mongoose from "mongoose";
import validator from "mongoose-unique-validator"

const User = new mongoose.Schema(
    {
        name : {
            type : String,
            require : [true, "Can't be empty"]
        },
        email : {
            type : String,
            require : [true, "Can't be empty"],
            unique : true
        },
        password : {
            type : String,
            require : [true, "Can't be empty"],
        },
        profilePicture : {
            type : String,
        }
    },
    {
        collation : 'users', 
        minimize : false
    }
);

User.plugin(validator);

export default mongoose.model('userData', User);