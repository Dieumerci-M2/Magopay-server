import joi from 'joi'

const registerValidator = joi.object().keys({
    name : joi.string().trim().min(3).required(),
    email : joi.string().trim().required(),
    password : joi.string().trim().min(6).max(18).required()

});

export default registerValidator