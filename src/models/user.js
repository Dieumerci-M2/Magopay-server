import mongoose from "mongoose"; 

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


export default mongoose.model('users', User);