import "./counterToDo.css";

function CounterToDo({ taksForCount }) {
  const completedToDos = taksForCount.filter((elem) => !!elem.completed).length;
  const totalTodos = taksForCount.length;

  return (
    <>
      <h4 className="counter__text">
        {completedToDos} of {totalTodos} completed.
      </h4>
    </>
  );
}

export { CounterToDo };
