import { User } from "./user";

export interface Session {
  token: string;
  auth: User;
};

export type SessionAction = {
  type: string;
  payload: Session;
};

type DispatchType = (args: SessionAction) => SessionAction;
