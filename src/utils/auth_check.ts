import jwt from "jsonwebtoken";
import { Response, Request, NextFunction} from 'express'
import { any } from "@hapi/joi";

interface IUserData {
  email: string,
  userId:string
}

const authChecker = (req: any, res: Response, next: NextFunction) => {
  try {
    const token :string = req.headers.authorization.split(" ")[1];
    const decodedToken : IUserData | any = jwt.verify(token, "secret_this_should_be_longer");
    req.userData   = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};

export default authChecker