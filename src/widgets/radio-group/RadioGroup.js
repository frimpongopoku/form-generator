import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "@emotion/css";
import { radioGroupCSS } from "./_style.radio-group";
import {
  commonStyleProps,
  commonStylePropValues,
} from "../shared/_shared.proptypes";
import { raise } from "../shared/_shared.styles";

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_checked: false,
    };
    this.handleOnItemSelected = this.handleOnItemSelected.bind(this);
  }

  handleOnItemSelected(e) {
    e.preventDefault();
    const { onItemSelected, label, value } = this.props;
    const { is_checked } = this.state;
    this.setState({ is_checked: !is_checked });
    if (!onItemSelected) return;
    onItemSelected(value || label);
  }
  componentDidMount() {
    const { checked } = this.props;
    this.setState({ is_checked: checked });
  }

  render() {
    const { groupStyle, groupClassName } = this.props;

    return (
      <div className={groupClassName} style={groupStyle}>
        <RadioButton
          {...this.props}
          onItemSelected={this.handleOnItemSelected}
          checked={this.state.is_checked}
        />
      </div>
    );
  }
}

RadioGroup.propTypes = {
  ...commonStyleProps,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

RadioGroup.defaultProps = {
  ...commonStylePropValues,
  label: "Select me please...",
  value: null,
};

const RadioButton = (props) => {
  const {
    containerStyle,
    containerClassName,
    style,
    className,
    onItemSelected,
    checked,
  } = props;
  const { emptyCircle, defaultContainer, hoveringCheckMarkCss } = radioGroupCSS;

  return (
    <div className={containerClassName} style={containerStyle}>
      <div className={cx(defaultContainer)} onClick={onItemSelected}>
        <div style={{ position: "relative" }}>
          <div className={`${cx(emptyCircle)} box`}></div>
          {checked && (
            <div
              className={`${cx(hoveringCheckMarkCss, raise)} check-mark`}
            ></div>
          )}
        </div>

        <p style={style} className={`${className}`}>
          Select me please...
        </p>
      </div>
    </div>
  );
};
