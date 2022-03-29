import { WordController } from '../controllers/word-controller';
import express from 'express';

const controller = new WordController();
const wordRouter = express.Router();

wordRouter.get("/:id", controller.list);


export { wordRouter };

