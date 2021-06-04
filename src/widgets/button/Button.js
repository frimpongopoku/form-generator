import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "@emotion/css";
import { default_btn, remove_defaults, round_me } from "./_style.button";
import { elevate } from "../shared/_shared.styles";
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
    const { className, style, elevation, rounded } = this.props;
    return (
      <button
        className={`${cx(
          remove_defaults,
          default_btn,
          elevate(elevation),
          rounded && round_me
        )}${className}`}
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
  elevate: PropTypes.number,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  className: "",
  elevation: 3,
  rounded: false,
};
