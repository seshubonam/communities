import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CommunitiesModal() {
  return (
    <View style={ styles.container }>
      <View style={ styles.communitiesContainer }>
        <View style={ styles.communitiesContent }>
          <Text>
            CommunitiesModal
          </Text>
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  communitiesContent: {
    marginTop: 50,
    marginLeft: 40
  }
});