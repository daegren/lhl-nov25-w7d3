import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import ButtonList from './components/ButtonList';
import PostList from './components/PostList';
import MousePosition from './components/MousePosition';
import EventHandler from './components/EventHandler';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-light bg-light navbar-expand">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <NavItem href="/form">Form</NavItem>
              <NavItem href="/buttons">Button List</NavItem>
              <NavItem href="/posts">Posts</NavItem>
              <NavItem href="/mouse">Mouse Position</NavItem>
              <NavItem href="/event">Event Handler</NavItem>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/buttons">
            <ButtonList />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/mouse">
            <MousePosition />
          </Route>
          <Route path="/event">
            <EventHandler />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const NavItem = ({ href, children }) => (
  <li className="nav-item">
    <Link to={href} className="nav-link">{children}</Link>
  </li>
)
