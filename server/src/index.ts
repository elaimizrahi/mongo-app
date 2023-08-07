import express, {Request, Response} from "express";
import mongoose from "mongoose";
import Deck from './models/Deck';

const app = express();
const port = 3000;

app.use(express.json());   

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({title: req.body.title});
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    'mongodb+srv://new_user:zYwFvRjPRXZHpMmZ@elai.jyaq15v.mongodb.net/?retryWrites=true&w=majority'
    ).then(() => {
        console.log('db connection established')
        app.listen(port);
    });


