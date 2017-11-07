import React, { Component } from 'react';

import Search from './components/add';

class App extends Component {
  
  constructor(props) {
    
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.Rectangle = this.Rectangle.bind(this);
    this.RecCount = this.RecCount.bind(this);
    this.state = {
    input : 10
   }
  }

   RecCount() {
       
        this.input = document.getElementById("rec").value;
       
    
    }

  Rectangle() {
    //var input;//variable to store 

    var recColor = "#21F7F3";
    //var canvas = document.createElement('canvas');
    
    var c = document.getElementById("canvas");
    
    var ctx = c.getContext("2d");
    
    //canvas coordinate for rectangle formation
    var x = 120;
    var y = 20;
    var z = y;
    
    //Dynamically change the height and width of rectangle with respect to the input form user form
    var width = 150;
    var height = 100;
    var changeColor="#FFC0CB";
    var select="1"; 
    
        for (var i = 0; i < this.input; i++) {
          
            /*var canvas = document.getElementById("canvas");*/
            ctx.fillStyle = recColor;
            ctx.fillRect(x, y, width, height);
    
            y += 120;
            z = y;
            //code to randomly generate the color for recangle
            var letters = '0123456789ABCDEF';
            var color = '#';
            var arr = [];
            for (var j = 0; j < 6; j++) {
                color += letters[Math.floor(Math.random() * 16)];
                recColor = color;
                arr[i] = color;
            }
          }
        }

  render() {
    return (
      <div className="App">
         <bold>Number of Rectangles:</bold>  
         <form>
             <input type="number" name="recCount" id="rec" onBlur = {this.RecCount}/>
             <br/>
         <h2><bold>Rectangles</bold></h2><br/>
         </form>
         <div>
<canvas id="canvas" width="1000" height="400"></canvas><br/>
</div>
<button type="button" onClick = {this.Rectangle}>AddRectangle</button>
<Search/>

      </div>
    );
  }
}

export default App;
