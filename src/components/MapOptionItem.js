import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function MapOptionItem({ imageUrl, transparent }) {

  return (
    <View style={transparent ? styles.mapOptionsIconContainerTransparent : styles.mapOptionsIconContainer}>
      <Image style={transparent ? [styles.mapOptionIconTransparent, styles.shadowProp] : [styles.mapOptionIcon, styles.shadowProp]} source={imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapOptionsIconContainer: {
    width: 35,
    marginTop: 10,
  },
  mapOptionsIconContainerTransparent: {
    width: 30,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 50,
  },
  mapOptionIcon: {
    width: 35,
    height: 35,
  },
  mapOptionIconTransparent: {
    width: 30,
    height: 30,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});