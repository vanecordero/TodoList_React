import { ToDoContainer } from "components/common/toDoContainer";
//import { getTodos } from "service/getTODOs";
import { useContext, useState } from "react";
import TodoContProv from "context";
import { useParams } from "react-router-dom";

function TaskBoard() {
  const { tasks, setTasks } = useContext(TodoContProv);
  const [todoList] = useState(tasks);
  const [searchedTodos, setSearchedTodos] = useState(tasks);

  let params = useParams();
  if (Object.keys(params).length === 0) {
    console.log("empty");
  }
  console.log(params);
  console.log(tasks);

  const filterTodo = (event) => {
    if (!event.target.value >= 1) {
      setSearchedTodos(todoList);
    } else {
      setSearchedTodos(
        todoList.filter((elem) =>
          elem["text"].includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  const completedToDos = todoList.filter((elem) => !!elem.completed).length;
  const totalTodos = todoList.length;

  return (
    <>
      <h2>My TODOs</h2>
      <h4>
        {completedToDos} of {totalTodos} completed.
      </h4>
      <input type="text" onChange={filterTodo} />

      <ToDoContainer todoData={searchedTodos} />
    </>
  );
}

export { TaskBoard };
