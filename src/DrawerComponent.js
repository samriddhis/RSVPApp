import React, { Component } from "react";
import { NavigationActions, DrawerActions } from "react-navigation";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
  }
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.ProfilePicStyle}>
            <Icon type="font-awesome" name="user-circle-o" size={20} />
            <Text style={styles.ProfileTextStyle}>Hello RSVPaPP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.NavHeaderStyle}
            onPress={this.navigateToScreen("HomeScreen")}
          >
            <Icon type="simple-line-icon" name="home" size={20} />
            <Text style={styles.NavHeaderTextStyle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.NavHeaderStyle}
            onPress={this.navigateToScreen("ListScreen")}
          >
            <Icon
              type="material-community"
              name="account-circle-outline"
              size={23}
            />
            <Text style={styles.NavHeaderTextStyle}>My Account</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ProfilePicStyle: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    padding: 22
  },
  ProfileTextStyle: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "200"
  },
  NavHeaderStyle: {
    flexDirection: "row",
    padding: 16
  },
  NavHeaderTextStyle: {
    marginLeft: 10,
    fontSize: 13
  }
});
