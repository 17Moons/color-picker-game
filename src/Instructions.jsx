
import Footer from "./Footer.jsx";


import "./instructions_back.css";


function Instructions(){
  return(<div>


<Footer/>

  <div className="context">
       <h1>Instructions:</h1>
       <div className="content">
         <p>In this game a random RGB value will be shown at the top of the screen and your task is to select the
         correct colored card corresponding to the RGB value</p>
         <p>In easy mode there are 3 colored cards to choose from and in hard mode there are 6 colored cards</p>
         </div>

   </div>


<div className="area" >
           <ul className="circles">
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
                   <li></li>
           </ul>
   </div >

</div>

)
}

export default Instructions;
