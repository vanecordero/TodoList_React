import "./toDoList.css";

function ToDoElement({ taks, onComplete, onDelete }) {
  return (
    <>
      <div
        className={`taks ${taks.completed ? "taks-completed" : ""}`}
        key={taks.id}
      >
        <span
          onClick={onComplete}
          data-task={taks.text}
          data-id={taks.id}
          data-type={taks.type}
          className="taks__completeBtn"
        >
          ✓
        </span>
        <p className="taks__text">{taks.text}</p>
        <span
          data-id={taks.id}
          data-type={taks.type}
          onClick={onDelete}
          className="taks__EliminateBtn"
        >
          x
        </span>
      </div>
    </>
  );
}

export { ToDoElement };
