import React, { Component } from 'react';
import {App} from '../App'

class Delete extends Component {
    
    constructor(props) {
        super(props);
     
       
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

    deleteRectangle() {
        //alert("hi");
        this.select = document.getElementById("sel1").value;
        this.x=120;
        this.y=20;
        var c = document.getElementById("canvas");
        
        var ctx = c.getContext("2d");
        if(this.select == "1"){
            //alert(recColor);
            this.x=120;
            this.y=20;
        ctx.clearRect(this.x,this.y, this.width, this.height);
        }
        else if(this.select == "2"){
            //alert(recColor);
            this.y+=120;
            ctx.clearRect(this.x,this.y,this.width,this.height);
        }
        else if(this.select == "3"){
            //alert(recColor);
            this.y+=240;
            ctx.clearRect(this.x,this.y, this.width, this.height);
        }
            }
  
        render(){
            return (

                <div>
                    Select Rectangle properties to be deleted:
                        <input type="text" id="sel1"/>
                
                </div>
            );
        }
    }

export default Delete;