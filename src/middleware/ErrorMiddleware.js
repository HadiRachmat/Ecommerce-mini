import { ResponseError } from '../error/ResponseError.js';

export const ErrorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        error: err.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        error: 'Internal Server Error',
      })
      .end();
  }
};
