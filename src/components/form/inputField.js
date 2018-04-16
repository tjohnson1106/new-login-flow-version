import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

class InputField extends Component {
  state = {};
  render() {
    const { labelText } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text>{labelText}</Text>
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  }
});

export default InputField;
