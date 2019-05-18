import React, { Component } from 'react';

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
    const Inner = {
    background:'#fff',
    margin:'10% auto',
    width:'50%',
    height:'40vh',
    boxShadow: '0 0 25px #888'
    }

    const heading = {
      background:'#428bca',
      paddingLeft:'30px',
      paddingTop:'20px',
      paddingBottom:'20px',
      color:'white',
      fontWeight:'400'
    }

    const BgInner = {
    background:'#252424 ',
    margin:'10% auto',
    width:'50%',
    height:'40vh',
   
    }

    const black = {
      background:'black',
      height:'100vh'
    }
    const white =  {
      background:'white'
    }

    const whiteBtn = {
      marginTop:'3%',
      marginLeft:'45%', 
      fontSize:'15px',
      padding:'10px 40px',
      background:'#428bca',
      color:'white',
      outline:'none',
      border:'2px solid #428bca'
    }

    const blackBtn = {
      marginTop:'3%',
      fontSize:'15px',
      marginLeft:'45%', 
      padding:'10px 40px',
      background:'white',
      border:'2px solid white',
      color:'black',
      outline:'none'
    }

   
    // rendering components conditionally
   let para = [];
   if(this.state.isChange){
     para.pop()
     para.push('black-paragraph')
   }else{
    para.pop()
    para.push('white-paragraph')
   }
    return (
      
         
          <div style={this.state.isChange ? white:black}>
          <button style={this.state.isChange ? whiteBtn:blackBtn} onClick={()=> this.changeBackground()}>toggle me</button>
          <span className="fa fa-moon"></span>
          <div>
            <div style={this.state.isChange ? Inner : BgInner}>
              <h2 style={heading}>Dark/light Mode Switcher</h2>
              <p className={para}>Toggle Me</p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
