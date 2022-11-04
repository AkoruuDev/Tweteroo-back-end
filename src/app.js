import cors from "cors";
import express from "express";

const app = express();

// config
app.use(cors());
app.use(express.json());

// server
const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    const user = {
        username,
        avatar
    }

    users.push(user);

    res.send("OK");
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;

    const post = {
        username,
        tweet
    }

    tweets.push(post);
    console.log(tweets);

    res.send("OK")
})

app.get('/tweets', (req, res) => {
    res.send("Seus posts aqui")
})

app.listen(5000, () => {
    console.log('Server ruinning')
})