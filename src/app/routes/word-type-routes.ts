import  { WordTypeController } from '../controllers/word-type-controller';
import express from "express";


const controller = new WordTypeController();
const wordTypeRouter = express.Router();

wordTypeRouter.get("/", controller.list);


export { wordTypeRouter };