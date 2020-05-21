import React from 'react';

const FaceRecognition = ({imageUrl}) => {

return(
<div className = 'center ma'> 
		<div className='mt2 absolute'>
		<img alt='image' src = {imageUrl} width = '500px' height='300px' />
		</div>
</div>

	);

}

export default FaceRecognition;