import React, { Component } from "react";
import { NAME, lowKeyValidation } from "../shared/utils/useful";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import { cx } from "@emotion/css";
import { putElementInline } from "../shared/_shared.styles";

export default class CheckBoxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_items: [],
    };
    this.handleOnItemSelected = this.handleOnItemSelected.bind(this);
  }

  handleOnItemSelected(value) {
    const { onItemSelected } = this.props;
    const { selected_items } = this.state;
    const notInIt = selected_items.filter((itm) => itm !== value);
    const itemExists = selected_items.filter((itm) => itm === value)[0];
    if (!itemExists) {
      var together = [...notInIt, value];
      this.setState({ selected_items: together });
      if (onItemSelected) onItemSelected(together, value);
      return;
    }
    this.setState({ selected_items: notInIt });
    if (onItemSelected)
      onItemSelected(notInIt.length !== 0 ? notInIt : null, value);
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) this.setState({ selected_items: defaultValue });
  }

  isArrayOfObjects() {
    /** These two values will be passed by developers if "this.props.data" is an array of objects instead of strings */
    return (
      this.props.labelFieldName !== NAME && this.props.valueFieldName !== NAME
    );
  }

  itemIsSelected(value) {
    const { selected_items } = this.state;
    // (selected_items || []).forEach( itm => { 
    //   if (itm === value) return true;
    // })
    console.log("i am all the items", selected_items,value);
    const k = selected_items.filter((itm) => itm === value)[0];
    console.log("found you bitch", k);
    return k;

    // return false;
  }

  renderContent() {
    lowKeyValidation(this.props);
    const { data, groupClassName, groupStyle, valueFieldName, labelFieldName } =
      this.props;
    if (!data) return <small> Provide data for this checkbox group...</small>;
    const dealingWithObjs = this.isArrayOfObjects();
    return data.map((item, index) => {
      var label, value;
      if (dealingWithObjs) {
        value = item[valueFieldName];
        label = item[labelFieldName];
      } else {
        label = item;
        value = item;
      }
      return (
        <div
          className={`${cx(putElementInline)} ${groupClassName}`}
          style={groupStyle}
          key={index.toString()}
        >
          <CheckBox
            {...this.props.childProps}
            label={label}
            value={value}
            onItemSelected={this.handleOnItemSelected}
            checked={this.itemIsSelected(value)}
          />
        </div>
      );
    });
  }
  render() {
    return <>{this.renderContent()}</>;
  }
}

CheckBoxGroup.propTypes = {
  /** Data to be displayed displayed in the form of checkboxes */
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),

  /** Should be provided if an array objects is passed into @data instead of an array of strings */
  labelFieldName: PropTypes.string,
  /** Should be provided if an array objects is passed into @data instead of an array of strings. Used to retrive the value from object onItemSelected */
  valueFieldName: PropTypes.string,
  /** Provides selected value when any item is selected */
  onItemSelected: PropTypes.func,
  /**  Value of item that should be pre-marked on load */
  defaultValue: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  groupStyle: PropTypes.object,
  groupClassName: PropTypes.string,
  /** Properties that should be passed on to each checkbox that is being displayed */
  childProps: PropTypes.object,
};

CheckBoxGroup.defaultProps = {
  data: ["Select Me Please..."],
  groupStyle: {},
  groupClassName: "",
  childProps: {},
  defaultValue: [],
};
