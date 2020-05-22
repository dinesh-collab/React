import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl , box}) => {

return(
<div className = 'center ma'> 
		<div className='mt2 absolute'>
		<img id = 'inputimage' alt=''  src = {imageUrl} width = '400px' height='300px' visibility=' hidden' />
		<div className='bounding-box' style = {{left : box.leftCol, top : box.topRow, right : box.rightCol, bottom : box.bottomRow }}> </div>  
		</div>
</div>

	);

}

export default FaceRecognition;