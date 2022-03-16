import { ToDoContainer} from '../../common/toDoContainer'; 
import { getTodos } from "service/getTODOs";


function TaskBoard (){
  return (
    <>
      <h2>Expensess</h2> 
    
    <ToDoContainer todoData={getTodos}/> 
    </>
  
    );
}

export { TaskBoard }