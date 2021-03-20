import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Welcoming from './Welcoming';
import ForumCard from './ForumCard';
import Login from './Login';
import DropDown from './DropDown';
import Signup from './Signup';
import Person from './Person';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


/* const Majors = ["IEM", "Computer Science", "Biology"]
  const IEM = ["calculus", "Algebra", "IntroJava", "Economics", "physics1B"];
  const CompScience = ["calculus", "Algebra", "IntroScience", "Logic", "Combi"];
  const Biology = ["Anatomy", "The cell", "Chemistry", "Calculus"]; */

const getAttributeName = (e, attributeName) => {
  return e.target.getAttribute(attributeName) || e.currentTarget.getAttribute(attributeName);
}

class DegreeList {
  constructor(number) {
    this.name = "IEM" + number;
    this.ref = "IEM" + (number + 1);
    this.title = null;
    this.list = ["IEM1", "IEM2", "IEM3", "IEM4"]
  }
}

const App = () => {
  const [mainArray, setMainArray] = useState(null)
  const [secondArray, setSecondArray] = useState();
  const [arrays, setArrays] = useState([
    new DegreeList(1),
    new DegreeList(2),
    new DegreeList(3),
    new DegreeList(4)
  ]);

  useEffect(() => {
    const mainArray = arrays.find(c => c.name === 'IEM1');
    mainArray.title = mainArray.name;
    setMainArray(arrays[0]);
  }, [])

  const handleSelectClick = (e) => {
    const name = getAttributeName(e, 'name');
    const refer = getAttributeName(e, 'refer');
    if (name) {
      const secondArray = arrays.find(c => c.name === refer);
      secondArray.title = secondArray.name;
      setSecondArray(secondArray);
      mainArray.title = refer;
      setMainArray(mainArray);
    }
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Home />
            <Login />
          </Route>
          <Route path="/Signup">
            <Home />
            <Signup />
          </Route>n
              <Route path="/Forming">
            <Home />
            <DropDown
              mainArray={mainArray}
              secondArray={secondArray}
              onSelectClick={handleSelectClick}
            />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
          </Route>
          <Route path="/">
            <Home />
            <Welcoming />
            <Person name="IDO" hobbies="Dancing" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;