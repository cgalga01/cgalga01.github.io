import './App.css';
import Header from './Components/header'
import Home from './Components/Home';
import Footer from './Components/Footer'
import About from './Components/About';
import PPR_All from './Components/FFRankings/PPR_All';

import {Route, Routes } from 'react-router-dom';
import QB_Rankings from './Components/FFRankings/QB_Rankings';
import RB_Rankings from './Components/FFRankings/RB_Rankings';
import WR_Rankings from './Components/FFRankings/WR_Rankings';
import TE_Rankings from './Components/FFRankings/TE_Rankings';
import Projects from './Components/Projects';
import BBPlayerValues from './Components/Projects/BBPlayerValues';
import XGHockey from './Components/Projects/XGHockey';
import BBArchetypes from './Components/Projects/BBArchetypes';
import XGHockeyST from './Components/Projects/XGHOCKEYST';
import BB_Rankings from './Components/BBRankings/BB_Rankings';


function App() {
  return (
    
    <div className="App">    
    <body>
        {/* Header componenet Which includes Menu */}
        <Header/>

        {/* These are the routes for all pages on the website */}
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/PPR_ALL' element = {<PPR_All/>}/>
          <Route path='/QB_Rankings' element = {<QB_Rankings/>}/>
          <Route path='/RB_Rankings' element = {<RB_Rankings/>}/>
          <Route path='/WR_Rankings' element = {<WR_Rankings/>}/>
          <Route path='/TE_Rankings' element = {<TE_Rankings/>}/>
          <Route path='/Projects' element = {<Projects/>}/>
          <Route path='/Projects/BBPlayerValues' element = {<BBPlayerValues/>}/>
          <Route path='/Projects/XGHockey' element = {<XGHockey/>}/>
          <Route path='/Projects/BBArchetypes' element = {<BBArchetypes/>}/>
          <Route path='/Projects/XGHockeyST' element = {<XGHockeyST/>}/>
          <Route path='/BBRankings/BB_Rankings' element= {<BB_Rankings/>}/>
        </Routes>
        
        {/* Footer component which includes social links */}
        <Footer/> 
      </body>
      </div>
  );
}

export default App;
