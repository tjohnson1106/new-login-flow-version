import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import colors from "../../styles/colors";

class RoundedButton extends Component {
  render() {
    const { text, textColor, background, handleOnPress, icon } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;

    return (
      <TouchableHighlight
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 17,
    width: "100%",
    textAlign: "center"
  }
});

export default RoundedButton;
