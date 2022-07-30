import React from "react";
import { View, StyleSheet, Image } from "react-native";


export default function MapTopIcon ({ imageUrl, small, smaller }) {
    return (
        <View style={styles.profileIconContainer}>
          <Image style={small ? styles.smallIcon : smaller ? styles.smallerIcon : styles.profileIcon} source={imageUrl} />
        </View>
    );
};

const styles = StyleSheet.create({
    profileIconContainer: {
      width: 50,
      height: 50,
      backgroundColor: "rgba(0, 0, 0, 0.175)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
    profileIcon: {
      width: 40,
      height: 40
    },
    smallIcon: {
      width: 35,
      height: 35,
    },
    smallerIcon: {
      width: 25,
      height: 25,
    }
  });