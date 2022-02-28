import { Link } from 'react-router-dom';
import "./difficult_back.css";
import Button from 'react-bootstrap/Button';
function Difficulty(){
  return(
    <div className="background">
      <h1 className="dig">Choose your difficulty</h1>
	  <Link to="/easy"><Button variant="outline-success" id="btn_ez">Easy Mode</Button></Link>
    <Link to="/hard"><Button variant="outline-danger" id="btn_hd">Hard Mode</Button></Link>
</div>


  )
}

export default Difficulty;
