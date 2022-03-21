import { useContext } from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
// import { types } from '../store/storeReducer';
// import { StoreContext } from '../store/StoreProvider';
// import { TodoState } from '../context/TodoState';
import { TodoContext } from '../context/TodoContext';


function TodoList() {

  const { todos, resetTodos } = useContext(TodoContext);
  //console.log(todos)


  //const { store, dispatch } = useContext(StoreContext)
  //const list = useContext(StoreContext).store
  //console.log(store)
  // const { todos } = store
  //console.log(todos)
/*
  const handleReset = ()=>{
    dispatch({ type: types.todoReset })
  } */
  
  return (
      <div>
        <h2>TODO LIST</h2>
         { todos.map((todo) => ( 
              <Todo todo={todo} key={todo.id} /> 
          )) }
      <button onClick={ () => resetTodos() } >Reset All</button>
        <TodoForm />
    </div>
    
  ) 
}

export default TodoList;
