import jwt from 'jsonwebtoken';
import * as userRepository from '../Data/userData.js';
import { config } from '../config.js';


const AUTH_ERROR = { message: "Authentication Error" };

export async function isAuth(req, res, next) {
  const authHeader = req.get('Authorization');
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(' ')[1];
  // header의 Autorization value = 'Bearer ~~~토큰~~~ 중 토큰을 추출'
  jwt.verify(token, config.jwt.secret, async (error, decoded) => {
    if (error) {
      return console.log(error);
    }
    const user = await userRepository.getById(decoded.userID)
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user._id;
    next();
  })


}