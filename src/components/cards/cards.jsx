import React, {Component} from 'react';
import Card from './cardUI';
import './card-style.css';
import img1 from '../../assets/aboutUs.jpg';


class Cards extends Component{
    render(){
    return(
        <div>
            
        <div className="card-border-top " >
        <div className="container-fluid d-flex justify-content-center" >
            <div className="row" style={{"width":"90%"}} >
                <div className="col-md-4 ">
                    <Card  title="Leave 1"/>
                    
                </div>
                <div className="col-md-4">
                    <Card title="Leave 2"/>
                    
                </div>
                <div className="col-md-4">
                    <Card  title="Leave 3"/>
                    
                </div>

            </div>

        </div>
        </div>
        
        </div>
    )
    }
}
export default Cards;