import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './icons8-brain-100.png';
const Logo = () =>
{
	return (
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2 pa2 " options={{ max : 45 }} style={{ height: 120, width: 120}} >
			
 						<div className="Tilt-inner center"> <img style ={{paddingTop : '5px',paddingLeft :'5px'}}alt='Logo' src = {brain} /> </div>
				</Tilt>
			</div>

		);
}

export default Logo;
