import { db } from '../../../models/index';
import { Request, Response } from 'express';

export class SentenceController {
    async list(req: Request, res: Response) {
        const sentences = await db.Sentence.findAll();

        res.send(sentences);
    }

    async create(req: Request, res: Response) {
        const sentence = await db.Sentence.create(req.body);
        
        res.send(sentence);
    }
}