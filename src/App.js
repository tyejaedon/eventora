import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Events from './pages/events'; 
import React from 'react';
import Dashboard from './pages/dashboard';

import { Route, Routes ,Router} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path = '/eve' element ={<Events/>}/>
        <Route path = '/events' element ={<Dashboard/>}/>


      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
