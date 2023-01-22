import { IronSessionOptions } from 'iron-session';
export const ironOptions: IronSessionOptions = {
  password: `a68AS-W8rtQ-57asQ-poe2d-m81Q9-AS817-5aWq9`,
  cookieName: `session`,
  cookieOptions: {
    // the next line allows to use the sessionReducer in non-https environments like
    // Next.js dev mode (http://localhost:3000)
    secure: process.env.NODE_ENV === `production`,
  },
}
