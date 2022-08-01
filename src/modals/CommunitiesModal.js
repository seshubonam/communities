import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CommunitiesModal({ navigation }) {
  const [text, onChangeText] = useState("Search for Commmunities");

  return (
    <View style={ styles.container }>
      <View style={ styles.communitiesContainer }>
        <View style={ styles.communitiesContent }>

          <View style={ styles.communitiesContentTop }>
            
            <View style={ styles.searchCommunitiesContainer }>
              <Image style={ styles.searchCommunitiesIcon } source={require("../../assets/snapchat/CommunitiesModalSearchIcon.png")} />
            </View>

            <TextInput style={styles.input} onChangeText={onChangeText} value={text} clearTextOnFocus={true} />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={ styles.closeCommunitiesModalContainer }>
                <Image style={ styles.closeCommunitiesIcon } source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  communitiesContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  communitiesContent: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  communitiesContentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchCommunitiesContainer: {
    height: 50,
    position: "absolute",
    zIndex: 1,
    top: 12,
    left: 15,
  },
  searchCommunitiesIcon: {
    width: 30,
    height: 30,
  },
  input: {
    height: 55,
    width: "83%",
    backgroundColor: "#ebeced",
    borderRadius: 50,
    paddingLeft: 60,
    fontWeight: "700",
    fontSize: 18,
    color: "#666d77",
  },
  closeCommunitiesModalContainer: {
    backgroundColor: "#eceef0",
    padding: 20,
    borderRadius: 50,
  },
  closeCommunitiesIcon: {
    width: 15,
    height: 15
  }

});