
import { useEffect, useState } from 'react'
// import { getTodos } from "service/getTODOs";
 import { ToDoElement } from "../toDoList";

function ToDoContainer ({ todoData }) {
  const [toDos, setToDos] = useState([])

  useEffect(() => {      
    const orderToDos = orderBy(todoData)
    setToDos(orderToDos)
  }, [todoData])

  // Order array of TODOs by type
  const orderBy = (ele) => {
    return ele.reduce((r,a)=>{
      r[a.type] = r[a.type] || [];
      r[a.type].push(a);
      return r;
    }, Object.create(null))
  }

  return (
  <>
  {
    (toDos.length===0)? <p>Vacio</p> 
    :  Object.keys(toDos).map((key) => (      
      <div key={key}>
        <span>{key}</span>
        {
          toDos[key].map(item=>(
            <ToDoElement key={`${key}_item_${item.id}`} taks={item}/>
          ))
        }
      </div>
      ))
  }
</>
)
  
}



export { ToDoContainer }

/* <ToDoElement todoData={toDos}/> */
