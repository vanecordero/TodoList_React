import { useEffect, useState, useContext } from "react";
// import { getTodos } from "service/getTODOs";
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

  // Order array of TODOs by type
  const orderBy = (ele, type) => {
    return ele.reduce((r, a) => {
      r[a[type]] = r[a[type]] || [];
      r[a[type]].push(a);
      return r;
    }, Object.create(null));
  };

  const completeTask = (event) => {
    let type = event.target.dataset.type;
    let id = event.target.dataset.id;
    let index = toDos[type].findIndex((elem) => elem.id == id);
    let newObj = toDos[type];
    newObj[index].completed = !newObj[index].completed;

    setTasks({ ...toDos, [type]: newObj });
  };

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
