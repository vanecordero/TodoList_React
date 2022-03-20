import { useEffect, useState, useContext } from "react";
import { ToDoElement } from "../toDoList";
import "./style.css";
import TodoContProv from "context";

function ToDoContainer({ todoData }) {
  const [toDos, setToDos] = useState([]);
  const { tasks, setTasks } = useContext(TodoContProv);

  useEffect(() => {
    const orderToDos = orderBy(todoData, "type");
    setToDos(orderToDos);
  }, [todoData]);

  // Order array of TO-DOs by type
  const orderBy = (ele, type) => {
    return ele.reduce((r, a) => {
      r[a[type]] = r[a[type]] || [];
      r[a[type]].push(a);
      return r;
    }, Object.create(null));
  };

  //mark completed the task
  const completeTask = (event) => {
    let id = tasks.findIndex((elem) => elem.id == event.target.dataset.id);
    tasks[id]["completed"] = !tasks[id]["completed"];
    actuliceTask();
  };

  //Delete task
  const deleteTask = (event) => {
    tasks.splice(
      tasks.findIndex((elem) => elem.id == event.target.dataset.id),
      1
    );
    actuliceTask();
  };

  function actuliceTask() {
    setTasks(tasks);
    setToDos(orderBy(tasks, "type"));
  }

  return (
    <>
      {toDos.length === 0 ? (
        <p>Vacio</p>
      ) : (
        Object.keys(toDos).map((key) => (
          <div className="todo__div" key={key}>
            <span className="todo__div__type">{key}</span>
            {toDos[key].map((item) => (
              <ToDoElement
                key={`${key}_item_${item.id}`}
                taks={item}
                onComplete={completeTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        ))
      )}
    </>
  );
}

export { ToDoContainer };

/* <ToDoElement todoData={toDos}/> */
