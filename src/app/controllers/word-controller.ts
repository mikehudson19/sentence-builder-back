import { db } from '../../../models/index';

export class WordController {
    async list(req: any, res: any) {
        
        const words = await db.Word.findAll({
            where: {
                wordTypeId: req.params.id
            },
            attributes: ['word']
        });

        res.send(words);
    }
}