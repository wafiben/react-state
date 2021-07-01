import React, { Component } from 'react'
import  { useState } from "react";
import './App.css';
import MyImg from './MyImg.JPG'

export class App extends Component {
  state={fullName:'wafi benjeddou',
  bio:"Student at GoMyCode", 
  imgSrc:MyImg,
   profession:'front-end developer',
  show:false,
  count:0}
  /*componentDidMount=() =>{
    this.intervalId= setInterval(()=>{
       this.setState({count:this.state.count+1})
       }
     , 1000);
     
 }*/
  showContent=()=>{
   // this.setState({show:!this.state.show})
   //this.setState({show: this.state.show? false:true})
    if(this.state.show)
    {
      this.setState({show:false})
     
    }
    else {
      setInterval(()=>{
        this.setState({count:this.state.count+1})
        }
      , 1000);
      this.setState({count:0})
this.setState({show:true})
    }
     
   }

  render() {
    return  <div className="container">
      
      {this.state.show ? <div >
    <p> <img src={this.state.imgSrc}></img></p>
    <h1>{this.state.fullName}</h1>
    <p>{this.state.bio}</p>
    <p>{this.state.profession }</p>
    <p>{this.state.count}</p>
    </div> : 'nothing to show click the button'}
    <button 
        style={{backgroundColor:"green",cursor:'pointer'}}  
      
        className="btn" onClick={this.showContent}>Toggle</button>
    
          
    
   
  </div>
  }
}

export default App
