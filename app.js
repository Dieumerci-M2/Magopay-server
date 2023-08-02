import express from "express";
import bodyParse from "body-parser"
import mongoose from "mongoose";
import message from "statuses"
import morgan from "morgan"
import dotenv from "dotenv"
import AuthRouter from "./src/routes/authRouter.js";
import cors from "cors"

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
     .then(() => console.log('Connexion à MongoDB réussie !'))
     .catch(() => console.log('Connexion à MongoDB échouée !'));

const Port = process.env.PORT || 5000;

app
    .use( bodyParse.json() )
    .use( express.json() )
    .use( morgan( 'dev' ) )
    .use( cors(), AuthRouter )
    
    

app.listen( Port, () => {
    console.log(`l'application tourne sur le port: http://localhost:${Port}`)
})