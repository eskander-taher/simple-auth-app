import express from "express";
const app = express();

import cors from "cors";

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
	res.json(req.body);
});

app.listen(3000, () => console.log("listening on port 3000"));
