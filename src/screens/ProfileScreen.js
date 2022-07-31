import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export default function ProfileScreen() {
  return (
    <ImageBackground source={require("../../assets/snapchat/3dBitmojiProfilePage.png")} resizeMode="cover" style={styles.backgroundImage}>
      <View style={ styles.container }>
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