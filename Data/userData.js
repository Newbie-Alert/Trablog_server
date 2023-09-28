import { ObjectId } from 'mongodb';
import * as db from '../Database/mongoDb.js'

export async function getAllUser() {
  return db.getUsers().find().toArray();
}

export async function getUserByNick(nickname) {
  const data = db.getUsers().findOne({ nickname: nickname })
  return data;
}

export async function createUser(info) {
  const newUser = { ...info }
  return await db.getUsers().insertOne(newUser)
    .then((data) => {
      return data.insertedId
    })
}

export async function getById(userID) {
  const O_id = new ObjectId(userID);
  const data = await db.getUsers().findOne({ _id: O_id });
  return data;
}