import "./searchToDo.css";

function SearchToDo({ onChange }) {
  return (
    <div className="search">
      <label htmlFor="searcInp" className="search__label">
        Search To Do:
      </label>
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
        onChange={onChange}
        id="searcInp"
      />
    </div>
  );
}

export { SearchToDo };
