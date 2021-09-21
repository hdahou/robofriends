import React from 'react';

const Card = ( { id, name, age, skill} ) => {
	return (
		<div className='bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5 tc'> 
			<img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>Age - {age}</p>
				<p>Skill - {skill}</p>
				<a class="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib near-black" href="#0">Hire Me</a>
			</div> 
		</div>
		);
}

export default Card; 