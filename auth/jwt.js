import jwt from "jsonwebtoken";

const VerifyToken = (token) => {
    let isValid = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) =>
        decode !== undefined ? decode : err
    );
    return !(isValid instanceof Error);
};

export const  VerifyTokenMiddleware = (req, res, next) => {
  let verify = VerifyToken(req.headers.authorization);
  if (verify) {
    next();
  } else {
    res.send({status: 401, message: "You are not authorized to access this endpoint"})
  }
}
  



