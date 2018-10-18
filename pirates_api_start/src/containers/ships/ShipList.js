import React from 'react';
import Ship from '../../components/ships/Ship'

const ShipList = (props) => {
		const allShips = props.ships.map((ship) => {
			return <li key={ship.id} className="component-item">
			<Ship ship={ship}/>
			</li>
		})

		return (
			<ul className="component-list">
				{allShips}
			</ul>
		)
	}

export default ShipList;
