import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionsIndx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionsIndx: index });
  };

  makeOptionsClassName = (index) => {
    const { activeOptionsIndx } = this.state;
    const optionClasses = ['ColorPicker_option'];
    if (index === activeOptionsIndx) {
      optionClasses.push('ColorPicker_option_active');
    }
    return optionClasses.join(' ');
  };

  render() {

    const { activeOptionsIndx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionsIndx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker_title">Color Picker</h2>
        <p>Selected color: { label }</p>
        <div>
          {options.map(({ label, color }, index) => {
            const optionClassNames = this.makeOptionsClassName(index);
            return (
              <button
                key={label}
                className={optionClassNames}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
