import express, {Request, Response} from "express";
import mongoose from "mongoose";
import Deck from './models/Deck';
import {config} from 'dotenv';

const app = express();
const port = 3000;
config();
app.use(express.json());   

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({title: req.body.title});
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    process.env.MONGO_URL ?? ""
    ).then(() => {
        console.log('db connection established')
        app.listen(port);
    });


