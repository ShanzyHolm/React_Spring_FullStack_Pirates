import React  from 'react';

const Ship = (props) => {

	const pirates = props.ship.pirates.map((pirate, index) => {
		return <li key={index}>{pirate.firstName} {pirate.lastName}</li>
	})
		return (
			<div>
			<h1>{props.ship.name}</h1>
			<h4>Pirates:</h4>
			<ul>
				{pirates}
			</ul>
		</div>
		)
	}

export default Ship;
