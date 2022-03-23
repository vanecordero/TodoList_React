import { useState } from "react";




function StoredTodo() {
  const localStorageTodos = localStorage.getItem('TODOS_V2', []);
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos =[];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);



  return ( 
    <>
    </>
   );
}

export  {StoredTodo};