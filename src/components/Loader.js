import React, { Component } from "react";
import { View, Text, StyleSheet, Modal, Image } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

class Loader extends Component {
  render() {
    const { animationType, visible, modalVisible } = this.props;
    return (
      <Modal animationType={animationType} transparent={true} visible={visible}>
        <View style={styles.wrapper}>
          <View>
            <View style={styles.loaderContainer}>
              <Image
                style={styles.loaderImage}
                source={require("../../assets/loading.gif")}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: "rgba( 0, 0, 0, 6 )",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: colors.white,
    left: "50%",
    top: " 50%",
    marginLeft: -45,
    marginTop: -45
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
});

export default Loader;
