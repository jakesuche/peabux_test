import {
  NextApiHandler,
} from "next";
import { withIronSessionApiRoute} from "iron-session/next";
import { FormDataProps } from "utils/schema";


declare module "iron-session" {
  interface IronSessionData {
    users: FormDataProps[];
  }
}

const sessionOptions = {
  password: "cookie-password-must-be-at-least-32-character-long",
  cookieName: "my-cookie-name",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000000,
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}


