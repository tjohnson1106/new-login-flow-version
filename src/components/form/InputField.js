import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

class InputField extends Component {
  state = {};
  render() {
    const { labelText, labelTextSize, labelColor } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelColor || colors.white;
    return (
      <View style={styles.wrapper}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: {
    fontWeight: "700",
    marginBottom: 10
  }
});

export default InputField;
