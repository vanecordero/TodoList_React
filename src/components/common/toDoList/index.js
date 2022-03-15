import './toDoList.css';

function ToDoElement ({ todoData }) {
  console.log(todoData)

  return <>
      {
        todoData.map(data => {
          return (
         <div key={data.id}>
          <span/>
          <p>{data.text}</p>
          <span/>
        </div>
          )
        })
      }
    </>
}


export { ToDoElement }
