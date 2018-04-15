import React, { Component } from "react";
import { View, Text, ScrollView, StyleShee, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";

import colors from "../styles/colors";

class Login extends Component {
  state = {};
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView>
            <Text>Log In</Text>
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
  }
});

export default Login;
