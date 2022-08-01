import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import MapTopIcon from '../components/MapTopIcon';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground source={require("../../assets/snapchat/3dBitmojiProfilePage.png")} resizeMode="cover" style={styles.backgroundImage}>
      <View style={ styles.container }>
        <View style={ styles.profileTopContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={ styles.profileTopLeft }>
              <MapTopIcon imageUrl={require("../../assets/snapchat/left-arroww.png")} smallest={true} />
            </View>
          </TouchableOpacity>
          <View style={ styles.profileTopRight }>
            <MapTopIcon imageUrl={require("../../assets/snapchat/uploadw.png")} smaller={true} />
            <MapTopIcon imageUrl={require("../../assets/snapchat/gearw.png")} smaller={true} />
          </View>
        </View>
        
        {/* Will edit the code above this comment soon. */}

        <View style={ styles.profileContainer }>
          <View style={ styles.profileContent }>
            <Text>
              Profile Screen
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  profileTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  profileTopLeft: {
  },
  profileTopRight: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 108
  },
  profileContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  profileContent: {
    marginTop: 50,
    marginLeft: 40
  }
  });