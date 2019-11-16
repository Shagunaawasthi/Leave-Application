import React from 'react';
import './leaves-style.css';
//import img1 from'../assets/aboutUs.jpg';
const Leaves=prop=>{
    return(
        <div className="leave">        
        <div className="card text-center shadow container ">
           
            <div className="card-body text-dark">
             <h4 className="card-title">Leave A</h4>
                <p className="card-text text-secondary">
                <h5 >Total Leaves: 30</h5>
                <input type="date"   placeholder="Date" ></input>
                </p>
                <button href="#" className="btn btn-outline-success">Claim </button>

            </div>

        </div>
        </div>

      
    );

}
export default Leaves;