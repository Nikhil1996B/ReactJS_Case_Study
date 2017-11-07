import React, { Component } from 'react';
import {App} from '../App'

class Search extends Component {

    constructor(props) {
        super(props);
       
        // This binding is necessary to make `this` work in the callback
        this.changeCol = this.changeCol.bind(this);
        this.printEditedRec = this.printEditedRec.bind(this);
        this.editFunction = this.editFunction.bind(this);
        this. editProp = this.editProp.bind(this);
        this.deleteRectangle = this.deleteRectangle.bind(this);
        this.state = {
           x:120,
           y:20,
           recColor:"#21F7F3",
           width:150,
           height:100,
           changeColor:"#FFC0CB",
           select:"1"
           }
    }

    changeCol() {
         var changeColor="#FFC0CB";
        switch (this.changeColor) {
            case "blue":
                this.recColor = "#0080ff";
                break;
            case "Green":
                this.recColor = "#00ff00";
                break;
            case "Yellow":
                this.recColor = "#ffff00";
                break;
            case "Pink":
                this.recColor = "#ff00ff";
                break;
            case "Black":
                this.recColor = "#000000";
                break;
            case "White":
                this.recColor = "#ffffff";
            case "Orange":
                this.recColor = "#ff8000";
                break;
            case "Red":
                this.recColor = "#ff0000";
                break;
            case "Purple":
                this.recColor = "#bf00ff";
                break;
        }
    }

     printEditedRec() {
      var c = document.getElementById("canvas");
    
    var ctx = c.getContext("2d");
    alert(this.select); 
     
    this.x=120;
    this.y=20;
        
    if(this.select == "1"){
            
            //alert(recColor);
            this.x=120;
             this.y=20;
         ctx.fillStyle = this.recColor;
         ctx.fillRect(this.x, this.y, this.width, this.height);
         }
         else if(this.select =="2"){
             //alert(recColor);
             this.y+=120;
           ctx.fillStyle = this.recColor;
           ctx.fillRect(this.x,this.y,this.width, this.height);
         }
         else if(this.select =="3"){
             //alert("hi");
             this.y+=240;
           ctx.fillStyle = this.recColor;
           ctx.fillRect(this.x, this.y, this.width, this.height);
         }
     }
    
     editFunction() {
        document.getElementById("myDIV").style.display = "block";
    }
    
    //function to edit properties of the rectangular list
    editProp() {
        this.width = document.getElementById("width").value;
        this.height = document.getElementById("height").value;
        this.changeColor = document.getElementById("changeColor").value;
        //alert(this.changeColor);
        this.select = document.getElementById("sel").value;
        //alert(this.select);
        //recColor = stringToColour(changeColor);
        
        //remove the current rectangle canvas and follow with the edit Rectangle printing
        this.changeCol();
        //alert(this.changeColor);
      //  deleteRectangle();
        this.printEditedRec();
    }

    deleteRectangle() {
        var c = document.getElementById("canvas");
        this.select = document.getElementById("sel").value;
        var ctx = c.getContext("2d");
        alert(this.select); 
         
        this.x=120;
        this.y=20;
            
        if(this.select == "1"){
                
                //alert(recColor);
                this.x=120;
                 this.y=20;
            
             ctx.clearRect(this.x,this.y, this.width, this.height);
             }
             else if(this.select =="2"){
                 //alert(recColor);
                 this.y+=120;
                 ctx.clearRect(this.x,this.y, this.width, this.height);
             }
             else if(this.select =="3"){
                 //alert("hi");
                 this.y+=240;
                 ctx.clearRect(this.x,this.y, this.width, this.height);
             }
         }
       /* var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
 
        this.x=120;
        this.y=20;
        if(this.select == "1"){
            //alert(this.recColor);
            this.x=120;
            this.y=20;
        ctx.clearRect(this.x,this.y, this.width, this.height);
        }
        else if(this.select == "2"){
            //alert(this.recColor);
            this.y+=120;
            ctx.clearRect(this.x,this.y,this.width,this.height);
        }
        else{
            alert(this.recColor);
            this.y+=240;
            ctx.clearRect(this.x,this.y, this.width, this.height);
        }
    }*/
        render(){
            return (

                <div>
                    <p>Note:To delete the last generated Rectangle, click on delete button</p>
                    <p>to edit the properties of rectangle, i.e height and width of rectangle click on edit properties</p>
                    <button onClick={this.editFunction}>EDIT</button>
                    <p>Confirm the change in property of Rectangle</p>
                    <button onClick={this.editProp}>Save Change</button><br />

                    <div id="myDIV" class="toshow">
                        Select Rectangle properties to be edited:
                        <input type="text" id="sel"/><br />
                        Width:<input type="text" id="width"/><br />
                        Height:<input type="text" id="height"/><br />
                        Color:<select onChange={this.changeCol} id="changeColor">
                            <option value="blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Orange">Orange</option>
                            <option value="Black" >Black</option>
                            <option value="White" >White</option>
                            <option value="Purple">Purple</option>
                            <option value="Red">Red</option>
                            <option value="Pink">Pink</option>
                              </select><br />
                    </div>
                    
                    <button onClick={this.deleteRectangle}>Delete Rectangle</button>
                </div>
            );
        }
    }

export default Search;