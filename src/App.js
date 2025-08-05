// src/App.js
import "bootstrap-4-react"
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
    < Header/>
     <Routes>
      <Route path="/" exact ={true} element={<Home/>} />
    </Routes>
    </BrowserRouter>
   
  );
}
export default App;
