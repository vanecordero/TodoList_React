import { Link } from "react-router-dom";


function BoardOptions() {
 

  return (
    <>
      <h2>Invoices</h2>

      <Link
       to={`/my-todos`}
       >
         Todas
       </Link>
      
    </> 
  
  );

}

export {BoardOptions};