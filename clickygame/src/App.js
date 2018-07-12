import React, { Component } from 'react';
import './App.css';
// import $ from ‘jquery’

class App extends Component {
  state = {
    current: 0,
    max: 0,
    message: "Good Guess!",
    flowers: [
      {id: 1,
      path: "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
     
      {id: 2,
      path: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
      {id: 3,
       path: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 4,
       path: "https://images.pexels.com/photos/87469/rose-blossom-bloom-red-rose-87469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
         
      {id: 5,
       path: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 6,
       path: "https://images.pexels.com/photos/53369/flower-red-lein-blossom-bloom-53369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
         
      {id: 7,
       path: "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 8,
       path: "https://images.pexels.com/photos/35646/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 9,
       path: "https://images.pexels.com/photos/54620/rose-roses-blossom-bloom-54620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 10,
       path: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 11,
       path: "https://images.pexels.com/photos/10462/pexels-photo-10462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
      {id: 12,
       path: "https://images.pexels.com/photos/80277/pexels-photo-80277.png?auto=compress&cs=tinysrgb&dpr=2&h=350"}],

  };

shuffle = () => {
  let current = this.state.current
  var flower = [{id: 1,
    path: "https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"},
   
    {id: 2,
    path: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
   
    {id: 3,
     path: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 4,
     path: "https://images.pexels.com/photos/87469/rose-blossom-bloom-red-rose-87469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
    {id: 5,
     path: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 6,
     path: "https://images.pexels.com/photos/53369/flower-red-lein-blossom-bloom-53369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
       
    {id: 7,
     path: "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 8,
     path: "https://images.pexels.com/photos/35646/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 9,
     path: "https://images.pexels.com/photos/54620/rose-roses-blossom-bloom-54620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 10,
     path: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 11,
     path: "https://images.pexels.com/photos/10462/pexels-photo-10462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"}, 
     
    {id: 12,
     path: "https://images.pexels.com/photos/80277/pexels-photo-80277.png?auto=compress&cs=tinysrgb&dpr=2&h=350"}]
    
  var j, x, i;
    for (i = flower.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = flower[i];
        flower[i] = flower[j];
        flower[j] = x;
    }
    this.setState({flowers: flower, current: ++current}) ;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Your Memeory Game</h1>
        </header>
        <p className="App-intro">
          Only click on each picture once for as long as you can!
        </p>
        <div class="row">
          <div class="col-md-4">
            <h2 className="max-score">
              MAX SCORE: {this.state.max}
            </h2>
          </div>
          <div class="col-md-4">
            <h2 className="max-score">
              {this.state.message}
            </h2>
          </div>
          <div class="col-md-4">
            <h2 className="max-score">
              CURRENT SCORE: {this.state.current}
            </h2>
          </div> 
        </div>

        <div class="row">
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[0].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[1].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[2].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[3].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[4].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[5].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[6].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[7].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[8].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[9].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[10].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
          <div class="col-md-3">
            <img id="flower" src={this.state.flowers[11].path} onClick={this.shuffle} alt="unclicked"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
