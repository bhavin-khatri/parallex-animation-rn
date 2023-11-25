import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home/Home";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="MovieListWithAnimations" component={Home} />
    </Stack.Navigator>
  );
};
