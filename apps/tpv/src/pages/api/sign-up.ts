import { withSessionRoute } from '../../lib/session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { authService } from '@/common/service';

export default withSessionRoute(async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = await req.body;
    const newuser = await authService.signUp(body)
    const user = {
      _id: newuser._id,
      role: newuser.role,
      picture: newuser.role,
      name: newuser.name,
      email: newuser.email,
    }

    const token = newuser.token;
    // @ts-ignore
    req.session.user = user
    // @ts-ignore
    req.session.isLoggedIn = true;
    // @ts-ignore
    req.session.token = token;
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
