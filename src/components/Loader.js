import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

class Loader extends Component {
  render() {
    const { animationType, visible } = this.props;
    return (
      <Modal animationType={animationType} transparent={true} visible={visible}>
        <Text>Loader</Text>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

export default Loader;
