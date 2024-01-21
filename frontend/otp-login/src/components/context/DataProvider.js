import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ chidren }) => {
  const [account, setAccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {chidren}
    </DataContext.Provider>
  );
};

export default DataProvider;
