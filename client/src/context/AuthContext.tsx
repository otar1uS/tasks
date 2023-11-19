import { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextProps, userState } from "../TS-types";

const AuthContext = createContext<AuthContextProps>({
  stateUser: { username: "", email: "", password: "" },
  setStateUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [stateUser, setStateUser] = useState<userState>({
    username: "",
    email: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ stateUser, setStateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthDispatch() {
  return useContext(AuthContext);
}
