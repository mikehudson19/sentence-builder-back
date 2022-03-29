import { db } from '../../../models/index';
import { Request, Response } from 'express';

export class WordController {
    async list(req: Request, res: Response) {
        
        const words = await db.Word.findAll({
            where: {
                wordTypeId: req.params.id
            },
            attributes: ['value']
        });

        res.send(words);
    }
}