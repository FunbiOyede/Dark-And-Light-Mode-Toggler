import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css';


class App extends Component {

 state = {
  //  boolean that determines the toggling
   isChange:false
 }
  

 
 changeBackground = () =>{
  const change = this.state.isChange;

  // toggles the boolean
  this.setState({
    isChange: !change
  })

}
  render() {
    const block = {
    background:'#252424',
    margin:'10% auto',
    width:'50%',
    height:'40vh',
    boxShadow: ''
    }

    const heading = {
      background:'#428bca',
      paddingLeft:'30px',
      paddingTop:'20px',
      paddingBottom:'20px',
      color:'white',
      fontWeight:'400'
    }


    const primaryBackground = {
      background:'black',
      height:'100vh'
    }
    

    const whiteBtn = {
      marginTop:'3%',
      marginLeft:'45%', 
      fontSize:'35px',
      padding:'10px 40px',
      color:'#428bca',
    }

    const blackBtn = {
      marginTop:'3%',
      fontSize:'35px',
      marginLeft:'45%', 
      padding:'10px 40px',
      color:'white',
    }

   
    // rendering components conditionally
    //for class names
   let paragraph = [];
   if(this.state.isChange){ 
     paragraph.push('black-paragraph')

     primaryBackground.background = 'white';

     block.background ='#fff';
     block.boxShadow = '0 0 25px #888';
   }else{
    paragraph.pop()
    paragraph.push('white-paragraph')
   }
    return (
      
         
        <div style={primaryBackground}>
         
          <FontAwesomeIcon style={this.state.isChange ? whiteBtn : blackBtn} onClick={()=> this.changeBackground()} icon={faMoon} />
          <div>
            <div style={block}>
              <h2 style={heading}>Dark/light Mode Switcher</h2>
              <p className={paragraph}>Toggle The Moon At The Top</p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
