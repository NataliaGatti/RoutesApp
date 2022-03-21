import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { TodoContext } from "./TodoContext";
import { ADD_TODO, RESET_TODOS } from "./actions";

export const TodoState = ({children}) => {
  const initialState = {
    todos: [
        {
          id: 1,
          title: "Terminar el homework",
          description: "Debo completar la homework de hoy",
          completed: false,
        },
        {
          id: 2,
          title: "Repasar useState y useEffect",
          description: "Son los hooks mas utilizados, conviene practicarlos haciendo ejercicios",
          completed: false,
        },
    ]
  }

  const [state, dispacth] = useReducer(todoReducer, initialState)
  const { todos } = state
  const addTodo = (todo) => {
    console.log("Add todo", todo)
    dispacth({
      type: ADD_TODO,
      payload: todo
    })
  }

  const resetTodos = () => {
    dispacth({type: RESET_TODOS})
  }

  return (
    <TodoContext.Provider value={ { todos, addTodo, resetTodos } }>
      {children}
    </TodoContext.Provider>
  )
}