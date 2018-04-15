import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";

class LoggedOut extends Component {
  onFacebookPress() {
    alert("Facebook button pressed");
  }

  onCreateAccountPress() {
    alert("Create Account");
  }

  onMoreOptionsPress() {
    alert("More Options Button Pressed");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Bracket Factory App Login</Text>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green_one}
            backgroundColor={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create an Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />
          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text>More Options</Text>
          </TouchableHighlight>
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
  },
  facebookButtonIcon: {
    color: colors.green_one,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 15
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16
  }
});

export default LoggedOut;
