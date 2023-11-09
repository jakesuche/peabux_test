import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
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

export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: ({
    req,
    res,
  }: GetServerSidePropsContext) =>
    | GetServerSidePropsResult<P>
    | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions);
}
