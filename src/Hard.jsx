
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



import './hard.css';




function randomColor()	{
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}



function colorArray(num)	{
	var arr = []
	for(var i=0; i<num; i++)
	{
		var k = randomColor()
		arr.push(k)
	}
	return arr
}



function Hard(){


    const [code, setCode] = useState(' ');
		const [play, setPlay] = useState('Generate Colors');
		const [disc, setDisc] = useState('Best of luck!')

    var sqaures;
    var colors;

    function handleClick () {


      setDisc("Best of luck!");
					document.getElementById("hard").style.backgroundColor = "white";
      var squares = document.querySelectorAll("cardhs")
      var	colors = colorArray(6)

    	for(var i=0;i<6;i++)
        {

          const bg =colors[i]
          document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
        }

     var color = 0;

      	var a = Math.floor((Math.random()*colors.length));
      	color = colors[a]

	      setCode(color);
				setPlay("Generate Again");

    }



	function cardhClickone(){
		var backColor=document.getElementsByClassName('cardh')[0].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");

			document.getElementById("hard").style.backgroundColor = backColor;

			for(var i=0;i<6;i++)
         {

           const bg = code;
           document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
         }


		}else{
		  setDisc("Try Again");
			document.getElementsByClassName('cardh')[0].style.backgroundColor = "white";

		}

	}
	function cardhClicktwo(){
		var backColor=document.getElementsByClassName('cardh')[1].style.backgroundColor;
		if(backColor==code)
		{
		 setDisc("You win !");

		 document.getElementById("hard").style.backgroundColor = backColor;
		 for(var i=0;i<6;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
				 }


		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('cardh')[1].style.backgroundColor = "white";
		}
	}
	function cardhClickthird(){
		var backColor=document.getElementsByClassName('cardh')[2].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");
			document.getElementById("hard").style.backgroundColor = backColor;
			for(var i=0;i<6;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
				 }

		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('cardh')[2].style.backgroundColor = "white";
		}
	}
	function cardhClickfourth(){
		var backColor=document.getElementsByClassName('cardh')[3].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");
			document.getElementById("hard").style.backgroundColor = backColor;
			for(var i=0;i<6;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
				 }

		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('cardh')[3].style.backgroundColor = "white";
		}
	}
	function cardhClickfift(){
		var backColor=document.getElementsByClassName('cardh')[4].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");
			document.getElementById("hard").style.backgroundColor = backColor;
			for(var i=0;i<6;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
				 }

		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('cardh')[4].style.backgroundColor = "white";
		}
	}
	function cardhClicksix(){
		var backColor=document.getElementsByClassName('cardh')[5].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");
			document.getElementById("hard").style.backgroundColor = backColor;
			for(var i=0;i<6;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('cardh')[i].style.backgroundColor = bg;
				 }

		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('cardh')[5].style.backgroundColor = "white";
		}
	}



  return(
    <div>
    <div id="hard">
      <h1 className="color_code">Color code : {code}</h1>


		<h3 className="color_msg">{disc}</h3>
    </div>
    <Button variant="outline-success" id="btn1" className="play_btn" onClick=  {() => {
              handleClick();
            }}>{play}</Button>
					<Link to="/easy"><Button variant="outline-danger" className="mode_btn"  id="btn2">Easy Mode</Button></Link>
          <div className="container" >
            <div className="cardh" onClick= {() => {
				              cardhClickone();
				            }}></div>
			  		<div className="cardh" onClick= {() => {
											cardhClicktwo();
										}}></div>

						<div className="cardh" onClick= {() => {
											cardhClickthird();
										}}></div>

						<div className="cardh" onClick= {() => {
											cardhClickfourth();
										}}></div>

							<div className="cardh" onClick= {() => {
											cardhClickfift();
										}}></div>

					 	<div className="cardh" onClick= {() => {
										cardhClicksix();
										}}></div>



</div>
            </div>
  );
}
export default Hard;
