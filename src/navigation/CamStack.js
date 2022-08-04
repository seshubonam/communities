import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import CameraScreen from "../screens/CameraScreen";

// Modals
import CommunitiesFeatureAlert from "../modals/CommunitiesFeatureAlert";

const Stack = createStackNavigator();

export default function CamStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false, cardStyle:{ backgroundColor: "rgba(0, 0, 0, 1)", opacity: 0.99 } }}>
        <Stack.Screen name="Membership" component={CommunitiesFeatureAlert} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}