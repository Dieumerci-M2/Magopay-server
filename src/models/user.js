import mongoose from "mongoose"; 

const User = new mongoose.Schema({
        name : { type : String, required : [true, "Can't be empty"]},
        email : { type : String, required : [true, "Can't be empty"], unique : true },
        password : { type : String, required : [true, "Can't be empty"]},
        profilePicture : { type : String }
    }, { collation : {locale: 'en_US', strength: 1 }, minimize : false }
);


export default mongoose.model('users', User);