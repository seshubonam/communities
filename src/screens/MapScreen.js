import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import MapTopIcon from "../components/MapTopIcon";
import MapBottomIcon from "../components/MapBottomIcon";
import MapOptions from "../components/MapOptions";
import MapDistrict from "../components/MapDistrict";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.021216555498675,
    longitude: -118.45007599325494,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [currentDistrict, setCurrentDistrict] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let region = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude, })
      
      setLocation(location);
      setCurrentRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // console.log(region[0]["district"])
      
      setCurrentDistrict(region[0]["district"])
    })();
  }, []);

  let text = "Waiting...";
  text = JSON.stringify(location);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
      {/* 1. MapTop begining implmentation and MapOptions beginning Implementation */}
       {/* 2. Cleans up MapBottom Icons and adds closer snap chat styling to icons  */}
      <View style={styles.mapTopContainer}>
        <View style={styles.mapTopContainerLeft}>
          <MapTopIcon imageUrl={require("../../assets/snapchat/placeholder.png")} />
          <MapTopIcon imageUrl={require("../../assets/snapchat/searchw.png")} small={true} />
          <MapDistrict imageUrl={require("../../assets/snapchat/placeholder.png")} district={currentDistrict} />
        </View>

        <View style= {styles.mapTopContainerRight}>
          <MapTopIcon imageUrl={require("../../assets/snapchat/gearw.png")} smaller={true} />
        </View>

      </View>

      <MapOptions />

      <View style={styles.locationContainer}>
        <TouchableOpacity
          style={styles.userLocation}
          onPress={() => {
            console.log("Go to user location!");
            const { latitude, longitude } = location.coords;
            setCurrentRegion({ ...currentRegion, latitude, longitude });
          }}
        >
          <Ionicons name="ios-navigate" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapBottomContainer}>
        <MapBottomIcon imageUrl={require("../../assets/snapchat/placeholder.png")} iconText="My Bitmoji"></MapBottomIcon>
        <MapBottomIcon imageUrl={require("../../assets/snapchat/placeholder.png")} iconText="Places"></MapBottomIcon>
        <MapBottomIcon imageUrl={require("../../assets/snapchat/placeholder.png")} iconText="Friends"></MapBottomIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    height: 30,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  mapBottomContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20
  },
  mapTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  mapTopContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 315,
  },
  searchIcon: {
    width: 35,
    height: 35,
  },
});
