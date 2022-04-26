import React from 'react'
import Navbar from './components/Navbar'
import Register from './components/Register';
import List_dogs from './components/List_dogs';
import Dogfile from "./components/Dogfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './components/Details';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function App() {

  const notify = ()=>{
 
    // Calling toast method by passing string
    toast('Hello Geeks')
}

  return (
    
      
      <Router>
    
        <Navbar />
        
        <Route path="/register" exact>
        <Register />
        </Route>
        <Switch>
          <Route path="/" exact>
            <List_dogs />
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
