import Token from '../models/token.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { SECRET_KEY } = process.env;

export const auth = async(req, res) => {
  try {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      res.status(401);
    }

    const { _id } = jwt.verify(token, SECRET_KEY);

    await Token.findOne({ token: token });

    res.json({ message: `Hello user with id: ${_id}` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
