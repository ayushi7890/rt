import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {
  ConfirmImageScreen,
  RetakePhotoScreen,
  ImageAdjustmentScreen,
  DRClassificationResultsScreen,
} from "./screens/FunctionalScreens";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
      gestureEnabled: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="ConfirmImage" component={ConfirmImageScreen} />
      <Stack.Screen name="RetakePhoto" component={RetakePhotoScreen} />
      <Stack.Screen name="ImageAdjustment" component={ImageAdjustmentScreen} />
      <Stack.Screen name="DRClassificationResults" component={DRClassificationResultsScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
