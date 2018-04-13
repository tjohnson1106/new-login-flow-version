import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class RoundedButton extends Component {
  state = {};
  render() {
    const { text } = this.props;

    return;
    <TouchableHighlight style={styles.wrapper}>
      <Text>{text}</Text>
    </TouchableHighlight>;
  }
}

RoundedButton.PropTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  wrapper: {}
});

export default RoundedButton;
