import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Modals
import PlacesModal from "../modals/PlacesModal";

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Places" component={PlacesModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}