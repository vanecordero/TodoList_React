import { RoutesLinks } from '../routes/routesLinks';
import { AddTaksButton } from '../common/addTaskButton'

function Layout() {

  const addTaks = (e)=>{
  alert('aad')
  }

  return ( 
  <>
  <RoutesLinks/>
  <AddTaksButton onClick={addTaks} />
  </> 
  );
}

export {Layout};