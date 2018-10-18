import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import PirateContainer from './containers/pirates/PirateContainer';
import PirateFormContainer from './containers/pirates/PirateFormContainer';
import ShipContainer from './containers/ships/ShipContainer';
class App extends Component {

  render() {
		return (
      <Router>
        <React.Fragment >
          <NavBar />
          <Switch>
            <Route exact path="/pirates" render={() => {
              const url = "/pirates";
              return <PirateContainer url={url}/>
            }}/>
            <Route exact path="/pirates/new" component={PirateFormContainer}/>
            <Route exact path="/ships" component={ShipContainer}/>
            <Route exact path="/pirates/:id" render={(props) => {
              const url = "/pirates/" + props.match.params.id + "?projection=embedShip"
              return <PirateContainer url={url}/>
            }}/>
          </Switch>
          </React.Fragment>

      </Router>
		)
	}
}

export default App;
