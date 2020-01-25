import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
  Modal
} from "react-native";
import { Icon } from "react-native-elements";
import HeaderComponent from "./HeaderComponent.js";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const { width, height } = Dimensions.get("window");

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      age: "",
      dob: "",
      locality: "",
      noOfGuest: "",
      address: "",
      showLoadMask: false,
      isDateTimePickerVisible: false
    };
    navigationVar = this.props.navigation;
  }
  onClickListener() {
    this.setState({ showLoadMask: true });
    this.getResponseForCall();
  }
  _clearValue() {
    this.setState({
      fullName: "",
      age: "",
      dob: "",
      locality: "",
      noOfGuest: "",
      address: ""
    });
  }

  async getResponseForCall() {
    try {
      let resp = await this.apiCall();
      if (resp) {
        alert("User has been saved successfully.");
        this.setState({ showLoadMask: false });
        this._clearValue();
      } else {
        alert("Oops,something went wrong!");
        this.setState({ showLoadMask: false });
      }
    } catch (error) {
      alert("Oops,something went wrong!");
      this.setState({ showLoadMask: false });
    }
  }

  apiCall() {
    return new Promise(function(resolve, reject) {
      try {
        fetch(
          "https://f4f0561d-3b8a-4321-a34e-799bd11b90a6.mock.pstmn.io/saveUser",
          {
            method: "GET"
          }
        )
          .then(response => resolve(true))
          .catch(error => {
            console.log(error);
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  _handleDatePicked = date => {
    console.log(date);
    this.setState({ dob: date });
  };

  _showDateTimePicker = () => {
    Keyboard.dismiss();
    this.setState({ isDateTimePickerVisible: true });
  };

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  render() {
    return (
      <View style={styles.outerContainer}>
        <HeaderComponent />
        {this.state.showLoadMask ? (
          <Modal
            transparent={true}
            animationType={"none"}
            visible={this.state.showLoadMask}
          >
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <Text style={styles.loadingTxtStyle}>Loading.....</Text>
                <ActivityIndicator
                  animating={this.state.showLoadMask}
                  color="#00b5ec"
                />
              </View>
            </View>
          </Modal>
        ) : (
          <View />
        )}
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
              value={this.state.fullName}
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
              value={this.state.age}
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
              value={this.state.dob}
              KeyboardType={"none"}
              onFocus={() => this._showDateTimePicker()}
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
              value={this.state.locality}
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
              value={this.state.value}
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
              value={this.state.value}
              onChangeText={address => this.setState({ address })}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={() => this.onClickListener()}
          >
            <Text style={styles.signUpText}>Submit</Text>
          </TouchableHighlight>
        </View>
        <DateTimePickerModal
          mode="date"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
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
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  loadingTxtStyle: {
    color: "gray"
  }
});
