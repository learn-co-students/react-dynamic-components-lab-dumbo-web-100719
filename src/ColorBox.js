import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}


// export default class Example extends Component {
//   render() {
//     const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)
//   }
// }