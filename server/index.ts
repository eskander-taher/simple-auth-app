import express from "express";
const app = express();

import cors from "cors";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
	try {
		const newUser = await prisma.user.create({
			data: req.body,
		});
		res.json(newUser);
	} catch (error) {
		res.json(error)
	}
});

app.listen(3000, () => console.log("listening on port 3000"));
