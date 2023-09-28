import * as userRepository from '../Data/userData.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { config } from '../config.js'

export async function signUp(req, res) {
  const { nickname, password, name, email } = req.body;

  // id 중복 검사
  const found = await userRepository.getUserByNick(nickname);

  if (found) {
    return res.status(409).json({ msg: `${nickname} already exists` })
  }

  const hashed = await bcrypt.hash(password, config.bcrypt.saltRound);

  const userID = await userRepository.createUser({
    nickname, password: hashed, name, email
  })

  const token = createJWT(userID);

  res.status(200).json({ token, name })
}

export async function signIn(req, res) {
  const { nickname, password } = req.body;

  const found = await userRepository.getUserByNick(nickname);

  if (!found) {
    return res.status(404).json({ msg: 'not exists nickname or password' })
  }

  const validPassword = await bcrypt.compare(password, found.password)

  if (!validPassword) {
    return res.status(404).json({ msg: 'not exists nickname or password' })
  }

  const token = createJWT(found._id);

  res.status(200).json({ token, name: found.name })
}


function createJWT(userID) {
  return jwt.sign({ userID }, config.jwt.secret, { expiresIn: config.jwt.expired })
}