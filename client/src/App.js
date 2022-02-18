import React, { createContext, useReducer } from 'react';
import {Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Navbar from './component/Navbar';
import SignUp from './component/SignUp';
import Logout from './component/Logout';
import Errorpage from './component/Errorpage';
import { initialState, reducer } from './reducer/UseReducer';

// Context API
export const UserContext = createContext();

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App;
