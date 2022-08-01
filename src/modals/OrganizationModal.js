import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CommunitiesCard from '../components/CommunitiesCard';

export default function OrganizationModal({ navigation }) {

  return (
    <View style={ styles.container }>
      <View style={ styles.organizationContainer }>
        <View style={ styles.organizationContent }>

          <View style={ styles.organizationContentTop }>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={ styles.closeOrganizationModalContainer }>
                <Image style={ styles.closeOrganizationIcon } source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
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
  organizationContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  organizationContent: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  organizationContentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeOrganizationModalContainer: {
    backgroundColor: "#eceef0",
    padding: 18,
    borderRadius: 50,
  },
  closeOrganizationIcon: {
    width: 15,
    height: 15
  },

});