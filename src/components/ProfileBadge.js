import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function ProfileBadge ({ imageUrl, text }) {
    return (
      <View style={ styles.profileBadgeContainer }>
      <View style={ styles.profileBadge }>
        <Image style={ styles.profileBadgeImage } source={ imageUrl } />
        <Text style={ styles.profileBadgeText }>{ text }</Text>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  profileBadgeContainer: {
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },
  profileBadge: {
    flexDirection: "row",
    backgroundColor: "#f7f8f8",
    borderRadius: 30,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileBadgeImage: {
    width: 25,
    height: 25
  },

  profileBadgeText: {
    color: "#666d77",
    fontSize: 20,
    marginLeft: 10,
  }
  });

