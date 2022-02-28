
import { Link } from 'react-router-dom';

import "./homepage.css";
function Home(){
  return(<div>

    <div class="container-fluid">

      <div class="background">
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
        <div class="cube"></div>
      </div>
     <header>
        <section class="header-content">
           <h1>The Great color picker game</h1>
         <Link to ="/difficulty"><button>Play</button></Link>
         <Link to ="/instructions"><button>Instructions</button></Link>
        </section>
    </header>
  </div>
</div>
  );

}

export default Home;
