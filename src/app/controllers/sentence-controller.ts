import { db } from '../../../models/index';

export class SentenceController {
    async list(req: any, res: any) {
        const sentences = await db.Sentence.findAll();

        res.send(sentences);
    }

    async create(req: any, res: any) {
        const sentence = await db.Sentence.create(req.body);
        
        res.send(sentence);
    }
}