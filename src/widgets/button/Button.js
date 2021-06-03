import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "@emotion/css";
import { default_btn, remove_defaults } from "./_style.button";
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    if (!onClick) return;
    onClick(e);
  }
  render() {
    const { className, style, elevate } = this.props;
    return (
      <button
        className={`${cx(remove_defaults, default_btn)}${className}`}
        style={style}
        onClick={this.handleOnClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  elevate: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  className: "",
  elevate: true,
};
