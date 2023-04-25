import React from 'react';
import Covid from './components/covid/covid';
import Navbar from './components/navbar';
import Statewise from './components/statewiseData/statewise';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

    function App() {
      return (
        <>
      <BrowserRouter>
  <Navbar />
           <Routes>
           <Route exact path="/" element={<Covid/>}></Route>
            <Route exact path="/statewiseData/statewise" element={<Statewise/>}></Route>
           </Routes>
  </BrowserRouter>
        </>
        );
    }
    

export default App

