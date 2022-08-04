import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function ProfileCard ({ topHeader, header, subtext, leftImage, rightImage, style }) {
  return (
    <View style={ [styles.profileCard, style ]}>

      <Text style={ styles.profileCardHeader }>{ topHeader }</Text>
      <View style={ [styles.profileCardContainer, styles.shadowProp ] }>
        <View style={ styles.profileCardContainerLeft }>
          <View style={ styles.profileCardContainerImageContainer }>
            <Image style={ styles.profileCardContainerImage } source={leftImage} />
          </View>
          <View style={ styles.profileCardContainerTextContainer }>
            <Text style={ styles.profileCardContainerHeaderText }>{header}</Text>
            { subtext ? <Text style={ styles.profileCardContainerSubText }>{subtext}</Text> : <View></View>}
          </View>
        </View>

        <View style={ styles.profileCardContainerRight }>
          <View style={ styles.profileCardContainerIconContainer }>
            <Image style={ styles.profileCardContainerIcon } source={rightImage} />
          </View>
        </View>
      </View>
    </View>
);
};

const styles = StyleSheet.create({
  profileCard: {
  },
  profileCardHeader: {
    fontSize: 15,
    fontWeight: "600",
  },
  profileCardContainer: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileCardContainerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileCardContainerImageContainer: {
    width: 25,
    height: 25,
  },
  profileCardContainerImage: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  profileCardContainerTextContainer: {
    marginLeft: 20,
  },
  profileCardContainerHeaderText: {
    fontSize: 16,
    fontWeight: "600",
  },

  profileCardContainerSubText: {
    color: "#C4C4C4",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  profileCardContainerIconContainer: {
    width: 12,
    height: 12,
  },
  profileCardContainerIcon: {
    width: 12,
    height: 12,
  },
});

