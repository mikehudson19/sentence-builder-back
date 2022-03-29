import { db } from '../../../models';

export class WordTypeController {
    async list (req: any, res: any) {
        const wordTypes = await db.WordType.findAll({
            attributes: ['value']
        });

        res.send(wordTypes);
    }
}