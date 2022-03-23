import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TodoContProv from "context";
import { TodoList } from "components/common/toDoList";
import { CounterToDo } from "components/common/counterToDo";
import { SearchToDo } from "./searchToDo";
import "./style.css";

function TaskBoard() {
  const { tasks } = useContext(TodoContProv);

  const [todoList, setTodoList] = useState([]);
  const [searchedTodos, setSearchedTodos] = useState([]);
  let params = useParams();

  //show taks denpends of url parameter
  useEffect(() => {
    if (Object.keys(params).length > 0) {
      let values = tasks.filter(
        (task) => task.type.toLowerCase() === params.type
      );
      setTodoList(values);
      setSearchedTodos(values);
    } else {
      setTodoList(tasks);
      setSearchedTodos(tasks);
    }
  }, [tasks]);

  const searchTodo = (event) => {
    if (!event.target.value >= 1) {
      setSearchedTodos(todoList);
    } else {
      setSearchedTodos(
        todoList.filter((elem) =>
          elem["text"].toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Link className="goBackLink" to={"/"}>
        ← Go to menu
      </Link>
      <h2 className="title">My TO-DOs</h2>
      <CounterToDo taksForCount={todoList} />
      <SearchToDo onChange={searchTodo} />
      <TodoList todoData={searchedTodos} />
    </>
  );
}

export { TaskBoard };
