import { RoutesLinks } from "../routes/routesLinks";
import { AddTaksButton } from "../common/addTaskButton";
import { TodoContProv } from "context";
function Layout() {
  const addTaks = (e) => {
    alert("aad");
  };

  return (
    <>
      <TodoContProv>
        <RoutesLinks />
        <AddTaksButton onClick={addTaks} />
      </TodoContProv>
    </>
  );
}

export { Layout };
