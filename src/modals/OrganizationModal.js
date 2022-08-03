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
                navigation.popToTop();
              }}
            >
              <View style={ styles.closeOrganizationModalContainer }>
                <Image style={ styles.closeOrganizationIcon } source={require("../../assets/snapchat/CommunitiesModalXIcon.png")} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.communityInfo}>

            <View style={styles.communityInfoLeft}>
              <Image style={styles.communityImage }source={require("../../assets/snapchat/CodeTalkLogo.png")}/>
            </View>
            
            <View style={styles.communityInfoRight}>
              <Text>
                CodeTalk
              </Text>
              <Text>
                Technology Training Program
              </Text>
            </View>

          </View>
          <View style={styles.communityHoursNumAddy}>
            <View style={styles.communityHours}>
              <Text>
                9am - 5pm
              </Text>
            </View>
            <View style={styles.communityAddress}>
                <View>
                  <Image style={styles.locImageStyle} source={require("../../assets/snapchat/blueLocationPoint.png")}/>
                </View>
                 <View style={styles.communityStreet}>
                  <Text>
                   St. Joseph Center
                  </Text>
                  <Text>
                    204 Hampton Dr
                  </Text>
                  <Text>
                    Venice, CA 90291
                  </Text>
                </View>
            </View>
            <View style={styles.phoneNumberContainer}>
              <View style={styles.phoneImgContainer}>
                <Image style={styles.phoneImg} source={require("../../assets/snapchat/TelephoneImg.png")}ß/>
              </View>
              <View style={styles.phoneNumber}>
                <Text>
                  (310) 396-6488
                </Text>
              </View>
            </View>
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
    height: "98%",
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
    marginRight: 15,
    // flex: "row",
  },
  organizationContentTop: {

  },
  closeOrganizationModalContainer: {
    backgroundColor: "#eceef0",
    padding: 15,
    borderRadius: 50,
    position: "absolute",
    right: 0,
  },
  closeOrganizationIcon: {
    width: 15,
    height: 15
  },
  communityImage: {
    width: 115,
    height: 115,
    // marginTop: 70,
    // flex: "row",
  },
  communityInfo: {
    flexDirection: "row",
    marginLeft: 70,
    marginRight: 70,
    marginTop: 40,
  },
  communityInfoLeft: {
    marginLeft: -60,
  },
  communityInfoRight: {
    marginLeft: 30,
    marginTop: 25,
  },
  communityHoursNumAddy: {
    
  },
  communityHours: {
    marginLeft: 31,
    marginTop: 5,
  },
  locImageStyle: {
    width: 25,
    height: 25,
    // marginTop: ,
  },
  communityAddress: {
    flexDirection: "row",
    marginTop: 19,
  },
  communityStreet: {
    marginLeft: 15,
  },
  phoneImg: {
    width: 25,
    height: 25,
  },
  phoneNumberContainer: {
    flexDirection: "row",
    marginTop: 19,
    // marginLeft: 7,
  },
  phoneNumber: {
    marginLeft: 15,
  }

});