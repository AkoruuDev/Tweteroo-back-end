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

    function usernameErr() {
        return username === undefined || username === null || username === "" || !username
    }

    function avatarErr() {
        return avatar === undefined || avatar === null || avatar === "" || !avatar
    }

    if (usernameErr() || avatarErr()) {
        res.status(400).send('Todos os campos devem ser preenchidos');
        return;
    }

    const user = {
        username,
        avatar
    }

    users.push(user);

    res.send("OK");
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    
    function tweetErr() {
        return tweet === undefined || tweet === null || tweet === "" || !tweet;
    }

    if (tweetErr()) {
        res.status(422).send('O tweet não pode estar vazio');
        return;
    }

    const post = {
        username,
        tweet
    }

    tweets.push(post);

    res.send("OK")
})

app.get('/tweets', (req, res) => {

    const novoTweets = tweets.map(tweet => {
        const user = users.find(user => user.username === tweet.username);
        const avatar = user.avatar;

        return ({ ...tweet, avatar })
    });

    res.send(novoTweets.slice(novoTweets.length - 10))
})

app.listen(5000, () => {
    console.log('Server ruinning')
})