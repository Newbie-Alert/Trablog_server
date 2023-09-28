import { MongoClient } from "mongodb";
import { config } from "../config.js";


const uri = config.db.host;
const client = new MongoClient(uri);

let db = client.db('trablog');

export function getUsers() {
  return db.collection('users')
}

export function getPosts() {
  return db.collection('posts')
}