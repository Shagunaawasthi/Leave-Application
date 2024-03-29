import React from 'react';
import './card-style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

//import img1 from'../assets/aboutUs.jpg';
const Card=prop=>{
    return(
        
        
        <div className="card text-center shadow"  >

           {/* <div className="overflow">
                <img src={prop.imgsrc} alt="img1" className="card-img-top" />
    </div>*/}
            <div className="card-body text-dark">
             <h4 className="card-title">{prop.title}</h4>
                <p className="card-text text-secondary">
                <h5>Total Leaves Left:</h5>
                   4
                </p>
                <button href="" className="btn btn-outline-success"><Link to="/staff/leave">Apply</Link> </button>
               
            </div>

        </div>
        
        
      
    );

}
export default Card;