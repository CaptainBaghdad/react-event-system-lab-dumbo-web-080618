// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class EyesOnMe extends React.Component{
  
  handleEyes = () => {
    console.log('Good!');
    
  }
  
  handleBlur(){
    console.log('Hey! Eyes on me!');
  }
  
  render(){
    
    return (
      <div>
      <button onBlur={this.handleBlur} onFocus={this.handleEyes} type="password" name="password" id="password" />
      </div>
      
      )
  }
  
}

