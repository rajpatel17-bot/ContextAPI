import React, { createContext, useState } from "react";
// import useCounter from "../hooks/useCounter";

// Context creation
const DataContext = createContext(null);

// Context provider
const DataProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

    return (
        <DataContext.Provider value={{ counter, setCounter }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };
