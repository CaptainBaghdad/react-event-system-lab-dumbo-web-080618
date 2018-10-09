// Code Keypad Component Here
import React, { Component } from 'react';


export default class KeyPad extends React.Component{
  
  handleInput = (event) => {
    console.log(`Entering password...`);
    
  }
  
  render(){
    
    return (
      <div>
      <input onKeyUp={this.handleInput.bind(this)} type="password" name="password" id="password" />
      </div>
      
      )
  }
  
}
