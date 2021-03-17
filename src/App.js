import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Location from './components/Location/Location';
import Hotel from './components/Hotel/Hotel';
import Details from './components/Hotel/Details';
import NotFound from './components/NotFound/NotFound';

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

        <Route path="/hotelDetails">
          <Header/>
          <Hotel />
          <Details/>
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
