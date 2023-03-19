import joi from 'joi'

const registerValidator = joi.object().keys({
    name : joi.string().trim().min(3).required(),
    email : joi.string().trim().required(),
    password : joi.string().trim().min(6).max(18).required()

});

// const userValidation = async (req, res, next) => {
// 	const payload = {
// 		name: req.body.name,
// 		email: req.body.email,
// 		password: req.body.password,
//     }

//     const error  = data.validate(payload);
//     if (error) {
//         res.status(406);
//         return res.json({message : "Les données que vous avez entré sont pas correct !"});
//     }
//     next();
// };

export default registerValidator