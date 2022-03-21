import { useState } from 'react';
import { useContext } from 'react';
// import { StoreContext } from '../store/StoreProvider';
// import { types } from '../store/storeReducer';
import { TodoContext } from '../context/TodoContext';

const initialFormValue = {
    title: "",
    description: "",
  };

export default function TodoForm() {    
    const [ formValue, setFormValue ] = useState(initialFormValue)
    const { title, description } = formValue;
    //const { store, dispatch } = useContext(StoreContext)
    const { addTodo } = useContext(TodoContext)

    const handleInputChange = (e) => {
        const changedFormValues = {
          ...formValue,
          [e.target.name]: e.target.value,
        };
        setFormValue(changedFormValues);
      };

    const handleSubmit = (e) => {
          e.preventDefault();
          const newTodo = {
            id: Date.now(),
            ...formValue,
            completed: false,
          };
          addTodo(newTodo)
         // dispatch({ 
           // type: types.todoAdd, 
            //payload : newTodo
        //})
          setFormValue(initialFormValue);
      };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titulo" 
            name="title" value={title}
            onChange={handleInputChange}/>
            <textarea placeholder="Descripcion" 
            name="description"  value={description}
            onChange={handleInputChange}>
           </textarea>
           <button > agregar </button>
          </form>
        </div>
    )
}
