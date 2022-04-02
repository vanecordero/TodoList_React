import { RoutesLinks } from "../routes/routesLinks";
import { AddTaksButton } from "../common/addTask/button";
import { TodoContProv } from "context";
function Layout() {
  return (
    <main>
      <TodoContProv>
        <RoutesLinks />
        <AddTaksButton />
      </TodoContProv>
    </main>
  );
}

export { Layout };
