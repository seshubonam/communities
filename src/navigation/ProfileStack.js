import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CommunityMembersScreen from "../screens/CommunityMembersScreen";

// Modals
import CommunitiesModal from "../modals/CommunitiesModal";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Group>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group> */}
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false, cardStyle:{ backgroundColor: "rgba(255, 255, 255, 0)", opacity: 0.99 } }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CommunityMembers" component={CommunityMembersScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}