import React, { Component,Fragment} from 'react';
import Toggle from './toggle';
import Portal from './portal';
import Modal from './modal.js';
import styled from 'styled-components'

class Leave extends Component{
  render(){
    return(
    <div>
     
      <Toggle >
      {({on ,toggle})=>(
        <Fragment>
          <Button onClick={toggle}  >Login</Button>
         <Modal on={on} toggle={toggle }>
         <h1> Hi,there!! </h1>
         </Modal>
         </Fragment>
       
       
      )}
       </Toggle>
    
    </div>
    );
  } 
}

const Button= styled.div`
position:relative;
top:0;
left:650px;
background: lime;
width:100px;
height:25px;
text-align:center;
border-radius:5px;
`;
export default Leave;
