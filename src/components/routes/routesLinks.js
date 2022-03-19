import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TaskBoard } from "../views/taskBoard";
import { BoardOptions } from "../views/boardOptions";

function RoutesLinks() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardOptions />} />
        <Route path="/todos" element={<TaskBoard />}>
          <Route path=":type" element={<TaskBoard />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesLinks };
