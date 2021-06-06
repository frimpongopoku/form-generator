import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkBoxCss } from "./_style.checkbox";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  commonStyleProps,
  commonStylePropValues,
} from "../shared/_shared.proptypes";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_checked: false,
    };
    this.onCheckBoxSelected = this.onCheckBoxSelected.bind(this);
  }

  onCheckBoxSelected(e) {
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
    const { containerStyle, containerclassName, style, className, label } =
      this.props;
    const { emptyBox, defaultContainer, hoveringCheckMarkCss } = checkBoxCss;

    return (
      <div className={containerclassName} style={containerStyle}>
        <div className={cx(defaultContainer)} onClick={this.onCheckBoxSelected}>
          <div style={{ position: "relative" }}>
            <div className={`${cx(emptyBox)} box`}></div>
            {this.state.is_checked && (
              <FontAwesomeIcon
                icon={faCheck}
                className={`${cx(hoveringCheckMarkCss)} check-mark`}
              />
            )}
          </div>

          <p style={style} className={`${className}`}>
            {label}
          </p>
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {
  ...commonStyleProps,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

CheckBox.defaultProps = {
  ...commonStylePropValues,
  label: "Select me please...",
  value: null,
};
