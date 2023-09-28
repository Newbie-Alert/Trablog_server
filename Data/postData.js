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

export async function getPopular() {
  const data = (await getAll()).find(data => data.likes > 1000);
  return data;
}