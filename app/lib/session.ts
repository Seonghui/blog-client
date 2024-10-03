import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    password: process.env.SECRET_COOKIE_PASSWORD!,
    cookieName: "bid",
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    }
  });
}
