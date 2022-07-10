import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllLeague from './Components/AllLeague/AllLeague';
import SingleLeague from './Components/SingleLeague/SingleLeague';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/header">
              <Header/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/allleague">
                <AllLeague />
            </Route>
<<<<<<< HEAD
            <Route path="/SingleLeague/:id">
=======
            <Route path="/SingleLeague/:idTeam">
>>>>>>> 25176c5d9f4292526ff930c75f9b61725d129707
                <SingleLeague />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


