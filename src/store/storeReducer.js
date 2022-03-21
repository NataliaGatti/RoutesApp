const initialStore = {
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

const types = {
  todoAdd:"TODO_ADD",
  todoReset:"TODO_RESET",
}

const storeReducer = ( state, action ) => {
  switch(action.type) {
    case types.todoAdd: 
      return {
        ...state, todos: [...state.todos, action.payload ]
            };
    case types.todoReset: 
    return {
        ...state, todos: []
    };
      default:
          return state
  }
}

export { initialStore, types };
export default storeReducer;
