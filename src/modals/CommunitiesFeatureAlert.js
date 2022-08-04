import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CommunitiesFeatureAlert({ navigation  }) {
  return (
    <View style={ styles.container }>
      <View style={ styles.membershipAlertContainer }>
        <View style={ styles.membershipAlertContent }>
          <Image style={ styles.membershipAlertImage } source={require("../../assets/snapchat/CommunitiesFeatureAlertIcon.png")} />
          <Text style={ styles.membershipAlertHeaderText }>New Feature:</Text>
          <Text style={ styles.membershipAlertSecondHeaderText }>Snap Communities</Text>
          <Text style={ styles.membershipAlertText }>You can now easily join a featured local organization on Snap Maps.</Text>
          <Text style={ styles.membershipAlertText }>Click the map to find your new community and start connecting with existing members!</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("CameraScreen");
          }}
          >
          <View style={ [styles.membershipAlertButtonContainer, styles.shadowProp] }>
            <Text style={ styles.membershipAlertButtonText }>Got it!</Text>
          </View>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  membershipAlertContainer: {
    height: "55%",
    width: "80%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "center",
  },
  membershipAlertContent: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  membershipAlertImage: {
    width: 177,
    height: 131,
  },
  membershipAlertHeaderText: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
  },
  membershipAlertSecondHeaderText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  membershipAlertText: {
    textAlign: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  membershipAlertButtonContainer: {
    borderRadius: 50,
    marginTop: 15,
    backgroundColor: "#4FAAF8",
  },
  membershipAlertButtonText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 50
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

});