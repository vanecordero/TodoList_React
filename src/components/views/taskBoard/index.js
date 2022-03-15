import { ToDoContainer} from '../../common/toDoContainer'; 
import { getTodos } from "service/getTODOs";


function TaskBoard (){
  
  console.log(typeof(getTodos))
  console.log(getTodos)
 
  return (
    <>
      <h2>Expenses</h2>
    
    
    <ToDoContainer todoData={getTodos}/> 
    </>
  
    );
}

export { TaskBoard }