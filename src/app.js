import cors from "cors";
import express from "express";

const app = express();

// config
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('Server ruinning')
})