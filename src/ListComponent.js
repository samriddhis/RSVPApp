import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert,
  TouchableOpacity
} from "react-native";

import data from "../MOCK_DATA.json";
const { height, width } = Dimensions.get("window");
import { Icon, SearchBar } from "react-native-elements";
import HeaderComponent from "./HeaderComponent.js";

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData: data, listScrollHeight: 0, searchValue: "" };
    this.storeOriginalValue();
  }
  storeOriginalValue() {
    this.arrayHolder = this.state.listData;
  }
  _renderItem = ({ item, index }) => (
    <View style={styles.listViewStyle}>
      <View style={styles.innerViewStyle}>
        <Icon
          name="user"
          type="antdesign"
          color="gray"
          size={18}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Name : {item.Name}</Text>
      </View>
      <View style={styles.innerViewStyle}>
        <Icon
          name="page"
          type="foundation"
          color="gray"
          size={18}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Age:{item.Age}</Text>
      </View>
      <View style={styles.innerViewStyle}>
        <Icon
          name="date-range"
          type="material"
          color="gray"
          size={18}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>DOB:{item.Dob}</Text>
      </View>
      <View style={styles.innerViewStyle}>
        <Icon
          name="location"
          type="evilicon"
          color="gray"
          size={22}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Locality:{item.Locality}</Text>
      </View>
      <View style={styles.innerViewStyle}>
        <Icon
          name="users"
          type="feather"
          color="gray"
          size={18}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>
          Number Of Guest:{item.NumberOfGuest}
        </Text>
      </View>
      <View style={styles.innerViewStyle}>
        <Icon
          name="address"
          type="entypo"
          color="gray"
          size={16}
          style={styles.iconStyle}
        />
        <Text style={styles.itemTextStyle}>Address:{item.Address}</Text>
      </View>
    </View>
  );

  _updateSearch(text) {
    const searchedData = this.arrayHolder.filter(function(item) {
      const itemData = item.Name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      listData: searchedData,
      searchValue: text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <SearchBar
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={text => {
            this._updateSearch(text);
          }}
          value={this.state.searchValue}
        />
        <FlatList
          style={styles.listStyle}
          ref={ref => (this.listRef = ref)}
          data={this.state.listData}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}
          onScroll={event =>
            this.setState({
              listScrollHeight: event.nativeEvent.contentOffset.y
            })
          }
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => {
            if (this.state.listScrollHeight > height) {
              return (
                <View
                  style={{
                    width: width,
                    height: height / 15,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.listRef.scrollToIndex({ animated: true, index: 0 })
                    }
                    style={styles.TopButtonStyle}
                  >
                    <Text
                      style={{
                        fontSize: height / 55,
                        color: "#008eec"
                      }}
                    >
                      {`Scroll to top`}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            } else return null;
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB"
  },
  separator: {
    width: width,
    height: 15,
    backgroundColor: "#ececec"
  },
  listViewStyle: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10
  },
  innerViewStyle: {
    flexDirection: "row",
    alignItems: "center"
  },
  itemTextStyle: {
    fontSize: 16,
    color: "#3498db",
    marginLeft: 10
  },
  TopButtonStyle: {
    width: width / 3,
    height: height / 20,
    borderRadius: width / 30,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  listStyle: {
    padding: 10
  }
});
