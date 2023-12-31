import { client } from "../index.js";
import bcrypt from "bcrypt";

export async function generateHashPassword(password) {
  const salt_round = 10;
  const salt = await bcrypt.genSalt(salt_round);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(data) {
  return await client.db("funnelhq").collection("user").insertOne(data);
}

export async function getUserByName(username) {
  return await client
    .db("funnelhq")
    .collection("user")
    .findOne({ username: username });
}
export async function getUserByEmail(email) {
  return await client
    .db("funnelhq")
    .collection("user")
    .findOne({ email: email });
}
