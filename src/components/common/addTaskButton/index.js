import "./style.css";

function AddTaksButton({ onClick }) {
  return (
    <div className="addTask">
      <button className="addTask__button" type="button" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export { AddTaksButton };
