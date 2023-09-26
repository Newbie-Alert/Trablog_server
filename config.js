import dotenv from 'dotenv';
dotenv.config();

export const config = {
  server: {
    port: process.env.PORT
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    expired: process.env.JWT_EXPIRED_TIME,
  },
  bcrypt: {
    saltRound: parseInt(process.env.BCRYPT_SALT_ROUNDS),
  }
}