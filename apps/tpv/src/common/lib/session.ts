// This file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

import type { IronSessionOptions } from 'iron-session';
import { ironOptions } from '../iron/options';

export const withSessionRoute = (handler: NextApiHandler) => {
  return withIronSessionApiRoute(handler, {
    ...ironOptions,
  });
};
