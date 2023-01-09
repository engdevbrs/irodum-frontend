import { createContext, useContext, useState } from "react";
const StepperContextPyme = createContext({ userDataPyme: "", setUserDataPyme: null });

export function UseContextProviderPyme({ children }) {
  const [userDataPyme, setUserDataPyme] = useState("");

  return (
    <>
    <StepperContextPyme.Provider value={{ userDataPyme, setUserDataPyme }}>
      {children}
    </StepperContextPyme.Provider>
    </>
  );
}

export function useStepperContextPyme() {
  const { userDataPyme, setUserDataPyme } = useContext(StepperContextPyme);
  return { userDataPyme, setUserDataPyme };
}