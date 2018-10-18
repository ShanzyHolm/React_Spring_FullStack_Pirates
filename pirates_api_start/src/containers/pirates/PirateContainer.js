import React, {Component} from 'react';
import PirateList from './PirateList.js';

class PirateContainer extends Component {

  constructor(props){
    super(props);
    this.state = {pirates: []}
    this.url = props.url;
  }

  componentDidMount(){
      fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        if(data._embedded){
        this.setState({pirates: data._embedded.pirates})
      } else {
        this.setState({pirates: [data]})
      }
      })

    }

  render() {
    return (
      <PirateList pirates={this.state.pirates}/>
    )
  }
}


export default PirateContainer;
