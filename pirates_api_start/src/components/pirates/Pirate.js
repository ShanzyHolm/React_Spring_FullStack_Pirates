import React  from 'react';

const Pirate = (props) => {

		const url = "/pirates/" + props.pirate.id
		return (
				<div className="component">
					<a href={url}>
					<p className="name">
						{props.pirate.firstName} {props.pirate.lastName}
					</p>
					</a>
					<p>Age: {props.pirate.age}</p>
					<p>Ship: {props.pirate.ship.name}</p>

				</div>
		)
	}

export default Pirate;
