import { ObjectId } from 'mongodb';
import * as db from '../Database/mongoDb.js';


export async function getAll() {
  return db.getPosts().find().toArray()
}

export async function getByNickname(nickname) {
  const data = db.getPosts().find({ nickname: nickname })
  return data;
}

export async function getByName(name) {
  const data = db.getPosts().find({ name: name }).toArray();
  return data;
}

export async function getById(post_id) {
  const O_id = new ObjectId(post_id);
  const data = db.getPosts().find({ _id: O_id }).toArray();
  console.log(data);
  return data;
}

export async function getPopular() {
  const data = (await getAll()).find(data => data.likes > 1000);
  return data;
}