import express from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";

const router = express.Router();

router.post('/api/v1/register', register)
router.post('/api/v1/login', login)


export default router;

