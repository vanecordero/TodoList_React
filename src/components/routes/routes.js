
import {  BrowserRouter, Route, Routes } from "react-router-dom";

import { TaskBoard } from "../views/taskBoard";
import { BoardOptions } from "../views/boardOptions";

function RoutesLinks() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardOptions />}/>
        <Route path="/my-todos" element={<TaskBoard />} />
      </Routes>
    </BrowserRouter> 
   );
}

export  {RoutesLinks};

