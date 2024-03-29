import React, { Component } from 'react';
import styled from 'styled-components'
import Portal from './portal.js';
class Modal extends Component{
    render(){
        const{ children, toggle, on}= this.props;
        return(
        <Portal>
            { on &&(
            <ModalWrapper>
                <ModalCard>
                 <CloseButton onClick={toggle}>X</CloseButton>
               <div>{children}</div>
               </ModalCard>
               <Background onClick={toggle}/>
            </ModalWrapper>
            )}
        </Portal>
        );
    }
}
const ModalWrapper= styled.div`
position :absolute;
top:0;
left:;
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items:center;
`;
const ModalCard=styled.div`
position:absolute;
background: white;
border-radius: 5px;
padding:15px;
box-shadow: 2px 2px 10px rgba(0,0,0, 0.3);
min-width: 200px;
min-height:100px;
display: flex;
justify-content:center;
align-items:center;
z-index:10;
margin-bottom: 100px;
`;
const CloseButton= styled.div`
position:absolute;
top:0;
right:0;
color:red;
`;
const Background= styled.div`
position: absolute;
width:100%;
height:100%;
top:0;
left:0;
background:black;
opacity: 0.5;
`;

export default Modal ;