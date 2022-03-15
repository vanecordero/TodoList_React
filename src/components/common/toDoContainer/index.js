
import { useEffect, useState } from 'react'
 import PropTypes from 'prop-types';
// import { getTodos } from "service/getTODOs";
// import { ToDoElement } from "../toDoList";

function ToDoContainer ({ todoData }) {
  const [toDos, setToDos] = useState([])

  useEffect(() => { 
     
    const orderToDos = orderListToDoByType(todoData)
    setToDos(orderToDos)
  }, [todoData])

  // Order array of TODOs by type
  const orderListToDoByType = (ele) => {
    const newArra = []
    ele.forEach(todo => {
      (Object.prototype.hasOwnProperty.call(newArra, todo.type))
        ? newArra[todo.type].push(todo)
        : newArra[todo.type] = [todo]
    })
    return newArra
  }
  console.log(toDos)

  return <>
  {
    toDos.map(ToDo => { 
      console.log(ToDo)
      return (
        <div key={ToDo.id}>a</div>
      )
    })
  }
</>
  
}

ToDoContainer.PropTypes ={
  todoData: PropTypes.array
}



export { ToDoContainer }

/* <ToDoElement todoData={toDos}/> */
