import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import EditItem from "./components/EditItem";
import HomePage from "./components/HomePage/HomePage";

import Item from "./components/Item";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              List Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={HomePage} />
          <Route exact path="/add" component={AddItem} />
          <Route path="/home/edit/:id" component={EditItem} />
          <Route path="/home/:id" component={Item} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
