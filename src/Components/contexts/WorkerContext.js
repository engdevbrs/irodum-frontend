import { createContext, useContext, useState } from "react";
const HomeContext = createContext({ worksearcher: "" , setWorksearcher: null});

export function HomeContextProvider({ children }) {
  const [worksearcher, setWorksearcher] = useState("");

  return (
    <>
    <HomeContext.Provider value={{ worksearcher, setWorksearcher }}>
      {children}
    </HomeContext.Provider>
    </>
  );
}

export function useHomeContext() {
  const { worksearcher, setWorksearcher } = useContext(HomeContext);
  return { worksearcher, setWorksearcher };
}