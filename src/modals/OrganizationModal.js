import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import OrgnizationInfoCard from '../components/OrganizationInfoCard';

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
              <Text style= {{fontWeight: "600", fontSize:25}}>
                CodeTalk
              </Text>
              <Text style= {{fontWeight: "300", fontSize: 15}}>
                Technology Training Program
              </Text>
            </View>

          </View>
          <View style={styles.communityHoursNumAddy}>
            <View style={styles.communityHours}>
              <Text style= {{fontSize: 14, fontWeight: "300"}}>
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
              <View style={styles.phoneNumberWebsiteContainer}>
                <View style={styles.phoneNumber}>
                  <Text>
                    (310) 396-6488
                  </Text>
                </View>
                <View style={styles.websiteContainer}>
                  <Text>
                    www.stjosephctr.org/codetalk
                  </Text>
                </View>
              </View>
            </View>
          </View> 
          <View style={styles.buttonContainer}> 
            <TouchableOpacity style={styles.joinButton}>
              <Image style={styles.buttonImage} source={require("../../assets/snapchat/JoinButton.png")}/>
            </TouchableOpacity>
          </View>

          
          <View style={styles.cardInfoContainer}>
            <View style={styles.aboutCardInfo}>
            <Text style={{fontWeight: "500", fontSize: 17, marginBottom: 5}}>
              About:
            </Text>
            <OrgnizationInfoCard info= "Codetalk is a digital web technology job training program for low income, underemployed and underserved women."/>
            </View>
            <View style={styles.yourImpactCardInfo}>
            <Text style={{fontWeight: "500", fontSize: 17, marginBottom: 5}}>
              Your Impact:
            </Text>
            <OrgnizationInfoCard info= "In a supportive classroom environment you will learn the fundamentals of front end web development and more!"/>
            </View>
            <View style={styles.reachOutCardInfo}>
            <Text style={{fontWeight: "500", fontSize: 17, marginBottom: 5}}>
              Reach Out:
            </Text>
            
            </View>
          </View>
          <View style={styles.bottomImagesContainer}>
            <View style={styles.coordinatorImageContainer}>
              <Image style={styles.coordinatorImage} source={require("../../assets/snapchat/OutreachCoord.png")}/>
              <View style={styles.coordinatorNameContainer}>
              <Text style={{fontSize: 15, fontWeight: "600"}}>
                David Xavier
              </Text>
              <Text style={{fontWeight: "300"}}>
                Outreach Coordinator
              </Text>
              <View style={styles.contactButtonContainer}>
              <TouchableOpacity>
                  <Image style={styles.contactButtonStyle} source={require("../../assets/snapchat/ContactButton.png")}></Image>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bitmojiImageContainer}>
              <Image style={styles.bitmojiImage} source={require("../../assets/snapchat/bookStickerBitmoji.png")}/>
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
    marginTop: 15,
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
    fontWeight: "650",
  },
  locImageStyle: {
    width: 20,
    height: 20,
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
    width: 20,
    height: 20,
  },
  phoneNumberContainer: {
    flexDirection: "row",
    marginTop: 19,
    // marginLeft: 7,
  },
  phoneNumber: {
    marginLeft: 15,
  },
  cardInfoContainer: {
    marginTop: 30,
  },
  phoneNumberWebsiteContainer: {
    flexDirection: "row",
  },
  websiteContainer: {
    marginLeft: 30,
  },
  // joinButton: {
  //   height: 25,
  //   width: 50,
  // },
  buttonContainer: {
    marginLeft: 275,
    marginTop: 15,
    marginBottom: -40,
  },
  buttonImage: {
    height: 50,
    width: 115,
  },
  bottomImagesContainer:
  {
    flexDirection: "row",
    // marginTop: 20,
    // marginLeft: 40,
  },
  coordinatorImage: {
    height: 80,
    width: 73,
  },
  bitmojiImage: {
    width: 250,
    height: 210,
  },
  coordinatorImageContainer: {
    // marginLeft: "-10%",
    // marginTop: "-7%",
    flexDirection: "row",
    marginLeft: "2%",
    
  },
  bitmojiImageContainer: {
    // marginLeft: 40,
    // marginTop: -25,
  },
  coordinatorNameContainer: {
    marginTop: "5%",
  },
  contactButtonContainer: {
    height: 30,
    width: 86,
    marginLeft: "3%",
  },
  contactButtonStyle: {
    height: 45,
    width: 105,
  }

});