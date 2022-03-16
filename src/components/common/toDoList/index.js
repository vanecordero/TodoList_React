import './toDoList.css';

function ToDoElement ({ taks }) {

  return (
  <>      
    <div key={taks.id}>
      <span/>
        <p>{taks.text}</p>
      <span/>
    </div>
  </>
  )
}


export { ToDoElement }
