import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";

class LoggedOut extends Component {
  state = {};
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome</Text>
          <RoundedButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.green_one
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});

export default LoggedOut;
