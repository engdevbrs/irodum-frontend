import { createContext, useContext, useState } from "react";
const LoginContext = createContext({ userData: "", setUserData: null });

export function LoginContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <>
    <LoginContext.Provider value={{ userData, setUserData }}>
      {children}
    </LoginContext.Provider>
    </>
  );
}

export function useLoginContext() {
  const { userData, setUserData } = useContext(LoginContext);
  return { userData, setUserData };
}