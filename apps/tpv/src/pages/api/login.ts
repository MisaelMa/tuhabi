import { withSessionRoute } from '../../common/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { authService } from '../../common/service';
import { setCookies } from 'cookies-next';
import { setTokenApi } from '../../common/service/api';

export default withSessionRoute(async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = await req.body;
    const auth = await authService.signIn(body)
    console.log("auth", auth)
    const user = {
      _id: auth.user.id,
      role: "admin",
      picture: auth.user.picture,
      name: auth.user.name,
      email: auth.user.email,
    }
    const token = auth.authorisation.token;
    // @ts-ignore
    req.session.user = user
    // @ts-ignore
    req.session.isLoggedIn = true;
    // @ts-ignore
    req.session.token = token
    setCookies('token', token);
    setTokenApi(token)
    await req.session.save();
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    // @ts-ignore
    const { response: fetchResponse } = error;
    // @ts-ignore
    res.status(fetchResponse?.status || 401).json(fetchResponse.data);
  }
});
