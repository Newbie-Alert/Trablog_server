import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { config } from './config.js';
import { authRouter } from './Router/authRouter.js';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));


// router
app.use('/auth', authRouter);



// Not Found
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Sorry not found🥺' }.msg)
})

// Error Handler
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: "Sorry..!! Server is broken..!!!!" }.msg)
})

app.listen(config.server.port, () => {
  console.log(`listening on`);
})