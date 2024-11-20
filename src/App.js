
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Modal from './components/Modal';
import "./App.css"

function App() {

  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/modal/:id' element={<Modal/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
