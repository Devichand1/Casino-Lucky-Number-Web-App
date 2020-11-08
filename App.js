import React from 'react';
import Header from './Header';
import Body from './Body';
import SignIn from  './login';
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
   <Router>
   <Switch>
   <Route path="/login">
     <SignIn />
   </Route>
   <Route path="/signup">
     <Signup />
   </Route>
   <Route path="/">
    <Header />
    <marquee style={{background:'#000',color:'#fff',padding:'5px',}}>! Play Lucky Number-7 and Earn Double !</marquee>
   <Body /></Route>
   
   </Switch>
   </Router>
    </>
  );
}

export default App;
