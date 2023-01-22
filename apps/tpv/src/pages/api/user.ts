import { withSessionRoute } from '../../lib/session';
import { withIronSessionApiRoute } from 'iron-session/next';

import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // @ts-ignore
  const user = req.session.user;
  const body = await req.body;
  if (user) {
    // @ts-ignore
    req.session.user.picture = body.picture
    await req.session.save();
    // in a real world application you might read the user id from the sessionReducer and then do a database request
    // to get more information on the user if needed
    res.json({ isLoggedIn: true, user });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
