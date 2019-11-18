import React, { Component } from 'react';


 class Toggle  extends Component{
   state={
       on : false,
   };
   handleToggle=()=>{
       this.setState({
           on: !this.state.on
       });
   };

    render(){
        const { children } = this.props;
        return  children({
            on: this.state.on,
            toggle: this.handleToggle,
        }) 
    }
}

export default Toggle;