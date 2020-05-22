import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignInForm from './Components/SignIn/SignInForm';
import Rank from './Components/Rank/Rank';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '523d6781c8b74962adf8e7361bd3947c'
});


const part = {
 particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 6
                    }
                  }
                }

}

class App extends React.Component {

constructor(){
  super();
  this.state = {
    input : '',
    imageUrl : '',
    box : {},
    route : 'signin'
  }
}


onclick = (event) => {
  this.setState({input :event.target.value})

}

claculateFaceLocation = (data) => {
 const clarifyFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage') ;
const width = Number(image.width);
const height = Number(image.height);

return{
  leftCol : clarifyFace.left_col * width,
  topRow : clarifyFace.top_row * height,
  rightCol : width - (clarifyFace.right_col * width),
  bottomRow : height - (clarifyFace.bottom_row * height)
}
}  

displayBox = (box)=>{
  this.setState({box : box});
}

onButtonSubmit = () => {
    this.setState({imageUrl :this.state.input});
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input).then((response) => 
      this.displayBox(this.claculateFaceLocation(response))).catch(err => console.log(err)
  );
}


  render (){
    return(
      
    <div className="App">

    <Particles className='Particles'
                params={part} />
                
      {this.state.route === 'signn' ? <SignInForm /> : <div>  <Navigation />
      <Logo />
    
     <Rank />
        <ImageLinkForm onclick={this.onclick} onButtonSubmit = {this.onButtonSubmit} />
    <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/> 
    </div>}
    </div>
  );
  
}}

export default App;
