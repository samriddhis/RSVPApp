import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import HeaderComponent from "./HeaderComponent";
const { height, width } = Dimensions.get("window");

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    navigationVar = this.props.navigation;
  }
  render() {
    return (
      <View style={styles.OuterContainer}>
        <HeaderComponent />
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1
  }
});
