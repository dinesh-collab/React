import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
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
    imageUrl : ''

  }
}


onclick = (event) => {
  this.setState({input :event.target.value})

}

onButtonSubmit = () => {
    this.setState({imageUrl :this.state.input})
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
}


  render (){
    return(
      
    <div className="App">
    <Particles className='Particles'
                params={part} />
      <Navigation />
    <Logo />
     <Rank />
        <ImageLinkForm onclick={this.onclick} onButtonSubmit = {this.onButtonSubmit} />
    <FaceRecognition imageUrl = {this.state.imageUrl}/> 
    </div>
  );
  
}}

export default App;
