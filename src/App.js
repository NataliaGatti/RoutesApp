import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import LandingPage from "./views/LandingPage";
import User from "./views/User";
import Error from "./views/Error";
import TodoList from "./components/TodoList";
//import GoHome from "./components/GoHome";
import {TodoState} from './context/TodoState'
// import StoreProvider from './store/StoreProvider'
import NavBar from "./components/NavBar";

function App() {

  return (

      <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={ <NavBar /> }>
            <Route path="list" element={ <TodoState> <TodoList /> </TodoState> }/>
           {/*  <Route path="list" element={ <StoreProvider> <TodoList /> </StoreProvider> }/> */}
            <Route path="user/:username" element={ <User/> }/>
            <Route path="about" element={ <About/> }/>
            <Route index element={ <LandingPage/> }/>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
   
    
   )
}
 
export default App;
