import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

class NextArrowButton extends Component {
  render() {
    const { disabled } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba( 255, 255, 255, 0.2 )" }
      : { backgroundColor: "rgba( 255, 255,  255, 0.6 )" };
    return (
      <TouchableHighlight style={[opacityStyle, styles.button]}>
        <Icon name="angle-right" color={colors.green_one} size={32} style={styles.icon} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});

export default NextArrowButton;
