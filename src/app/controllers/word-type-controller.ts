import { db } from '../../../models';
import { Request, Response } from 'express';

export class WordTypeController {
    async list (req: Request, res: Response) {
        const wordTypes = await db.WordType.findAll({
            attributes: ['value']
        });

        res.send(wordTypes);
    }
}