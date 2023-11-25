import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home/Home";
import GameDetails from "../components/GameDetails/GameDetails";
import {navigationConstants} from "../constants/NavigationConstant";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name={navigationConstants.HOME} component={Home} />
      <Stack.Screen name={navigationConstants.GAME_DETAILS} component={GameDetails} />
    </Stack.Navigator>
  );
};
