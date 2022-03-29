/**
 * Required External Modules
 */

 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 
 dotenv.config();

/**
 * Create & connect to DB
 */

 import mysql from "mysql2";
 
 export const db = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PWD,
     database: process.env.DB_NAME
 })

 db.connect((err) => {
     if (err) {
         throw err;
     }
     console.log("Connected to DB");
 })


/**
 * App Variables
 */


 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

/**
 *  App Configuration
 */


//  app.use(helmet());
 app.use(cors());
 app.use(express.json());


 /**
 *  Import Routes
 */
import { wordTypeRouter } from '../src/app/routes/word-type-routes';
import { wordRouter } from "./app/routes/word-routes";

app.use("/wordtypes", wordTypeRouter);
app.use("/words", wordRouter);

/**
 * Server Activation
 */

 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });