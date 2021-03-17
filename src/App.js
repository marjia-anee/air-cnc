import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Location from './components/Location/Location';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Header/>
          <Home />
        </Route>

        <Route exact path="/login">
          <Header/>
          <Login />
        </Route>

        <Route path="/requiredLocation">
          <Header/>
          <Location />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
