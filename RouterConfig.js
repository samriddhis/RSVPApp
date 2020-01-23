import { createDrawerNavigator ,createStackNavigator } from "react-navigation";
import HomeComponent from "./src/HomeComponent";
import ListComponent from "./src/ListComponent";
import DrawerComponent from "./src/DrawerComponent";

const MyDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: HomeComponent,
    ListScreen: ListComponent
  },
  {
    contentComponent: DrawerComponent,
    drawerWidth: 300
  }
);

const MyStackNavigator = createStackNavigator(
  {
    HomeScreen:HomeComponent,
    DrawerNavigator: MyDrawerNavigator
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);


export default MyStackNavigator;
