import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function SearchBox ({ initialText }) {
  const [text, onChangeText] = useState(initialText);

  return (
    <View>
      <View style={ styles.searchCommunitiesContainer }>
        <Image style={ styles.searchCommunitiesIcon } source={require("../../assets/snapchat/CommunitiesModalSearchIcon.png")} />
      </View>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} clearTextOnFocus={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "100%",
    backgroundColor: "#ebeced",
    borderRadius: 50,
    paddingLeft: 74,
    paddingRight: 74,
    fontWeight: "700",
    fontSize: 18,
    color: "#666d77",
  },
  searchCommunitiesContainer: {
    height: 50,
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 15,
  },
  searchCommunitiesIcon: {
    width: 25,
    height: 25,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
});

