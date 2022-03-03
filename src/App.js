import React,{useEffect,useState} from 'react'
import { Routes,Route,Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";


function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Name") === null && localStorage.getItem("Password") === null) {
      setToken(false);
    } else {
      setToken(true);
    }
  }, []);
   
  return (
    <>
    <Routes>
      <Route path="/Home" element={token ? <Home /> : <Navigate to="/" />} /> 
      <Route exact path="/" element={<SignUp />}/>
      <Route exact path="/login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default App