import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import HeaderComponent from "./HeaderComponent";

export default class ListDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.OuterContainerStyle}>
      <HeaderComponent/>
      <Text>list component</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  OuterContainerStyle: {
    flex: 1,
    backgroundColor: "#F6F6F6"
  }
});
