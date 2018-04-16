import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

class Login extends Component {
  state = {};
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green_one
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    color: colors.white,
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 30
  }
});

export default Login;
