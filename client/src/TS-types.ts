import { Dispatch, SetStateAction } from "react";

export interface userState {
  username?: string;
  email?: string;
  password?: string;
}

export interface AuthContextProps {
  stateUser: userState;
  setStateUser: Dispatch<SetStateAction<userState>>;
}
