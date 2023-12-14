import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import UserRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongodb is connected");

app.use("/api/user", UserRouter);

//Home
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 <h1>Welcome to Authentication System App<h1>");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
