import React, { Component } from 'react';
import Pirate from '../../components/pirates/Pirate.js';

const PirateList = (props) => {

	const pirates = props.pirates.map((pirate) => {
	 	return (<li key={pirate.id} className="component-item">
			<Pirate pirate={pirate} />
		</li>
	)
	})

	return (
		<ul className="component-list">
			{pirates}
		</ul>
	)
}

export default PirateList;
