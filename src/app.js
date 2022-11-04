import cors from "cors";
import express from "express";

const app = express();

// config
app.use(cors());
app.use(express.json());

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    const user = {
        username,
        avatar
    }

    res.send("OK");
})

app.listen(5000, () => {
    console.log('Server ruinning')
})