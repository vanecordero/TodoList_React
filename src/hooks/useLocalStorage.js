import { useState } from "react";

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem =[];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = newTodos =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.getItem(itemName, stringifiedTodos);
    setItem(newTodos);
  }

  return [item, saveItem];

}

export default useLocalStorage;