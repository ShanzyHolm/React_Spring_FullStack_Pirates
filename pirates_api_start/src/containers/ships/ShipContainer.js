import React, {Component} from 'react';
import ShipList from './ShipList.js';

class ShipContainer extends Component {

  constructor(props){
    super(props);
    this.state = {ships: []}
  }

  componentDidMount(){
    fetch('/ships')
    .then((res) => res.json())
    .then((data) => {
      this.setState({ships: data._embedded.ships})
    })
  }

  render() {
		return (
			<ShipList ships={this.state.ships} />
		)
	}
}


export default ShipContainer;
