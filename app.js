import express from "express";
import bodyParse from "body-parser"
import message from "statuses"
import morgan from "morgan"
import dotenv from "dotenv"

const app = express();

dotenv.config();

const Port = process.env.PORT || 5000;

app
    .use( bodyParse.json() )
    .use( express.json() )
    .use( morgan( 'dev' ) )
    
    

app.listen( Port, () => {
    console.log(`l'application tourne sur le port: http://localhost:${Port}`)
})