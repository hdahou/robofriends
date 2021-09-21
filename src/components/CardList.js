import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
	        {
	        	robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							age={robots[i].age}
							skill ={robots[i].skill}
							/>
					);
				})
	    	}
    	</div>
    );
}

export default CardList; 