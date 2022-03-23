import React, { useState } from "react";
import { defaultTodos } from "../service/defaultTodos";

const Context = React.createContext({});

export function TodoContProv({ children }) {
  const [tasks, setTasks] = useState(defaultTodos);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export default Context;
