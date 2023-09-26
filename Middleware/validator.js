import { validationResult } from "express-validator";

// req의 데이터 중 에러를 잡아, 에러처리 또는 다음 미들웨어로
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json(errors.array()[0].msg)
}