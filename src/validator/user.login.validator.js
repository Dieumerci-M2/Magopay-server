import joi from "joi";

const loginValidator = joi.object().keys({
    email : joi.string().trim().required(),
    password : joi.string().trim().min(6).max(18).required()
})

export default loginValidator;
