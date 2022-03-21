import { ADD_TODO, RESET_TODOS } from "./actions";

export const todoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO: 
      return { ...state, todos: [...state.todos, action.payload] } 
    case RESET_TODOS:
      return { ...state, todos:[] }
    default:
      return state
    } 
}