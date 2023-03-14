import express from "express";
import register from "../controllers/register.js";
//import validator from "../validator/user.validator.js"

const router = express.Router();

router.post('/api/v1/register', register)


export default router;

