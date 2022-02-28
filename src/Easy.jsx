
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




import './easy.css';




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



function Easy(){


    const [code, setCode] = useState(' ');
		const [play, setPlay] = useState('Generate Colors');
		const [disc, setDisc] = useState('Best of luck!')

    var sqaures;
    var colors;

    function handleClick () {


      setDisc("Best of luck!");
					document.getElementById("easy").style.backgroundColor = "white";
      var squares = document.querySelectorAll("cards")
      var	colors = colorArray(3)

    	for(var i=0;i<3;i++)
        {

          const bg =colors[i]
          document.getElementsByClassName('card')[i].style.backgroundColor = bg;
        }

     var color = 0;

      	var a = Math.floor((Math.random()*colors.length));
      	color = colors[a]

	      setCode(color);
				setPlay("Generate Again");

    }



	function cardClickone(){
		var backColor=document.getElementsByClassName('card')[0].style.backgroundColor;
		if(backColor==code)
		{
			setDisc("You win !");

			document.getElementById("easy").style.backgroundColor = backColor;

			for(var i=0;i<3;i++)
         {

           const bg = code;
           document.getElementsByClassName('card')[i].style.backgroundColor = bg;
         }


		}else{
		  setDisc("Try Again");
			document.getElementsByClassName('card')[0].style.backgroundColor = "white";

		}

	}
	function cardClicktwo(){
		var backColor=document.getElementsByClassName('card')[1].style.backgroundColor;
		if(backColor==code)
		{
		 setDisc("You win !");
		 document.getElementById("easy").style.backgroundColor = backColor;
		 for(var i=0;i<3;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('card')[i].style.backgroundColor = bg;
				 }


		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('card')[1].style.backgroundColor = "white";
		}
	}
	function cardClickthird(){
		var backColor=document.getElementsByClassName('card')[2].style.backgroundColor;
		if(backColor==code)
		{

			setDisc("You win !");
			document.getElementById("easy").style.backgroundColor = backColor;
			for(var i=0;i<3;i++)
				 {

					 const bg = code;
					 document.getElementsByClassName('card')[i].style.backgroundColor = bg;
				 }

		}else{
				  setDisc("Try Again");
			  document.getElementsByClassName('card')[2].style.backgroundColor = "white";
		}
	}


  return(
    <div>
    <div id="easy">
      <h1 className="color_code">Color code : {code}</h1>


		<h3 className="color_msg">{disc}</h3>
    </div>
    <Button variant="outline-success" id="btn1" className="play_btn" onClick=  {() => {
              handleClick();
            }}>{play}</Button>
					<Link to="/hard"><Button variant="outline-danger" className="mode_btn" id="btn2">Hard Mode</Button></Link>
          <div className="container" >
            <div className="card" onClick= {() => {
				              cardClickone();
				            }}></div>
			  		<div className="card" onClick= {() => {
											cardClicktwo();
										}}></div>

						<div className="card" onClick= {() => {
											cardClickthird();
										}}></div>



</div>
            </div>
  );
}
export default Easy;
