import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

class Notification extends Component {
  state = {};
  render() {
    const { type, firstLine, secondLine } = this.props;
    return (
      <View>
        <View>
          <Text>{type}</Text>
          <Text>{firstLine}</Text>
          <Text>{secondLine}</Text>
        </View>
      </View>
    );
  }
}

export default Notification;
