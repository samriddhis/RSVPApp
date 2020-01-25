import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import HeaderComponent from "./HeaderComponent.js";
const { width, height } = Dimensions.get("window");

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    state = {
      fullName: "",
      age: "",
      dob: "",
      locality: "",
      noOfGuest: "",
      address: ""
    };
    navigationVar = this.props.navigation;
  }

  render() {
    return (
      <View style={styles.OuterContainer}>
        <HeaderComponent />
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon
              name="user"
              type="antdesign"
              color="gray"
              size={18}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid="gray"
              onChangeText={fullName => this.setState({ fullName })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="page"
              type="foundation"
              color="gray"
              size={18}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Age"
              keyboardType="numeric"
              underlineColorAndroid="gray"
              onChangeText={age => this.setState({ age })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="date-range"
              type="material"
              color="gray"
              size={18}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="DOB"
              underlineColorAndroid="gray"
              onChangeText={dob => this.setState({ dob })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="location"
              type="evilicon"
              color="gray"
              size={22}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Locality"
              underlineColorAndroid="gray"
              onChangeText={locality => this.setState({ locality })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="users"
              type="feather"
              color="gray"
              size={18}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Number of Guest"
              underlineColorAndroid="gray"
              keyboardType="numeric"
              onChangeText={noOfGuest => this.setState({ noOfGuest })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="address"
              type="entypo"
              color="gray"
              size={16}
              style={styles.iconStyle}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Address"
              underlineColorAndroid="gray"
              onChangeText={address => this.setState({ address })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => this.onClickListener("sign_up")}
          >
            <Text style={styles.signUpText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    marginLeft: 20
  },
  inputContainer: {
    width: 350,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "#00b5ec"
  },
  signUpText: {
    color: "white"
  }
});
