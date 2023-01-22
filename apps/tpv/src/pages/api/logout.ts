import { withSessionRoute } from '../../lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionRoute(async function logoutRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  req.session.destroy();
  res.json({ isLoggedIn: false });
});
