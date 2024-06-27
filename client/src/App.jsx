import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./components/Login/log-in" 
import { Signup } from "./components/Signup/sign-up"
import { Home } from "./components/Home/Home"
import { Profile } from "./components/profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/log-in" element={<Login />}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;