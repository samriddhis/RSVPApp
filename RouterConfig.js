import React, { Component } from "react";
import { DrawerNavigator} from "react-navigation";
import HomeComponent from "./src/HomeComponent";
import ListComponent from "./src/ListComponent";
import DrawerComponent from "./src/DrawerComponent";

const HomeScreenRouter = DrawerNavigator(
  {
    HomeScreen: { screen: HomeComponent },
    ListScreen: { screen: ListComponent }
  },
  {
    contentComponent: props => <DrawerComponent {...props}/>
  }
);
export default HomeScreenRouter;
