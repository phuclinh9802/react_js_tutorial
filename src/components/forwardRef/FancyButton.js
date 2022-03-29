import React, { forwardRef } from "react";

const Fancy = forwardRef((props, ref) => (
  <input {...props} ref={ref} className="FancyButton" />
));

class FancyButton extends React.Component {
  ref = React.createRef();

  // focus on the button
  onFocus() {
    this.ref.current.focus();
  }

  render() {
    // when onClick, we need to call the function out
    return (
      <div>
        <Fancy ref={this.ref} />
        <button onClick={() => this.onFocus()}>Click me!</button>
      </div>
    );
  }
}

export default FancyButton;
