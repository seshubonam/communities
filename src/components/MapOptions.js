import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MapOptionItem from "./MapOptionItem";

export default function MapOptions() {

  return (
    <View style={styles.mapOptions}>
      <MapOptionItem imageUrl={require("../../assets/snapchat/placeholder.png")} />
      <MapOptionItem imageUrl={require("../../assets/snapchat/placeholder.png")} />
      <MapOptionItem imageUrl={require("../../assets/snapchat/placeholder.png")} />

      <MapOptionItem imageUrl={require("../../assets/snapchat/downarroww.png")} transparent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapOptions: {
    backgroundColor: "rgba(0, 0, 0, 0.175)",
    borderRadius: 50,
    position: "absolute",
    top: 110,
    right: 10,
    height: 190,
    width: 50,
    alignItems: "center",
  },
});