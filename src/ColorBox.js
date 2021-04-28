import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  buildInnerColorBox(){
    const newValue = this.props.opacity;
    console.log(newValue);
    if(newValue>=0.2){
         return <ColorBox opacity={newValue-0.1} />
    }
    else {
         return null;
    }
  }


  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
            {this.buildInnerColorBox()}
      </div>
    )
  }

}
