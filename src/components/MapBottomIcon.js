import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function MapBottomIcon ({ imageUrl, iconText }) {
    return (
      <View style={styles.iconContainer}>
        <View style={styles.iconImageContainer}>
          <Image
            style={styles.iconImage}
            source={imageUrl}
          />
        </View>
        <View style={styles.iconTextContainer}>
          <Text style={styles.iconText}>{ iconText }</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
  iconImageContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  iconImage: {
    width: 60,
    height: 60,
  },
  iconTextContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
  },
  iconText: {
    fontSize: 11,
    fontWeight: "700",
  }
});