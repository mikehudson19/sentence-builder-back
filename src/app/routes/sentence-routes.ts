import { SentenceController } from "../controllers/sentence-controller";
import express from "express";

const controller = new SentenceController();
const sentenceRouter = express.Router();

sentenceRouter.get('/', controller.list);
sentenceRouter.post('/', controller.create);

export { sentenceRouter };