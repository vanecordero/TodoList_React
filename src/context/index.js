import React, { useState } from "react";
import { getTodos } from "../service/getTODOs";

const Context = React.createContext({});

export function TodoContProv({ children }) {
  const [tasks, setTasks] = useState(getTodos);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export default Context;
