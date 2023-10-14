
// import React from "react"
import './App.css';
import Board from "./Components/Board/Board";
// import Card from "./Components/Board/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import {useDispatch,useSelector} from "react-redux";
import {fetchData} from "./Settings/Setting";
import { useEffect } from 'react';

function App() {
  const dispatch=useDispatch();
  const {tickets}=useSelector((state)=> state.dataSlice);
  useEffect(() =>{
    dispatch(fetchData());
  },[dispatch]);
  return tickets ? (
    <div className="App">
       <Navbar/>
       <Board/>
          
    </div>
  ):(
    console.error("Something went wrong")
  );
};

export default App ;
