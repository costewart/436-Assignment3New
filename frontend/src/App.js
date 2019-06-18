import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from './components/todos-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import logo from "./logo.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router> 
        
        <div className="App">
          
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="https://github.com/costewart/436-Assignment3New" target="_blank">
              <img src={logo} width="85" height="100" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navheader">Who's Cooking?</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="navlink">Cooking Board</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="navlink">Add Dish</Link>
                </li>
              </ul>
            </div>
          </nav>


          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>

      </Router>
    );
  }
}

export default App;
