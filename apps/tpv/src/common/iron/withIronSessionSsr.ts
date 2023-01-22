import { getIronSession, IronSessionData, IronSessionOptions } from "iron-session";;


import type {
  NextApiHandler,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { IncomingMessage, ServerResponse } from "http";
import getPropertyDescriptorForReqSession from "./getPropertyDescriptorForReqSession"
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { Store } from 'redux';
// Argument type based on the SSR context
type GetIronSessionSSROptions = (
  request: IncomingMessage,
  response: ServerResponse,
) => Promise<IronSessionOptions> | IronSessionOptions;

declare type IronSession<T> = IronSessionData & T & {
  /**
   * Destroys the session data and removes the cookie.
   */
  destroy: () => void;
  /**
   * Encrypts the session data and sets the cookie.
   */
  save: () => Promise<void>;
};

export interface GetSSPropsCtx<Session> extends GetServerSidePropsContext {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies,
    session: IronSession<Session>
  };
  store: Store;
  res: ServerResponse;
}
export function withIronSessionSsr<Session, P extends { [key: string]: any } = { [key: string]: any },>(
  handler: (
    context: GetSSPropsCtx<Session>,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
  options: IronSessionOptions | GetIronSessionSSROptions,
) {
  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(
    context: GetSSPropsCtx<Session>,
  ) {
    let sessionOptions: IronSessionOptions;

    // If options is a function, call it and assign the results back.
    if (options instanceof Function) {
      sessionOptions = await options(context.req, context.res);
    } else {
      sessionOptions = options;
    }

    const session = await getIronSession(
      context.req,
      context.res,
      sessionOptions,
    );

    Object.defineProperty(
      context.req,
      "session",
      getPropertyDescriptorForReqSession(session),
    );
    return handler(context);
  };
}
