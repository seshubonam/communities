import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MapTopIcon from '../components/MapTopIcon';
import ProfileBadge from '../components/ProfileBadge';
import ProfileCard from '../components/ProfileCard';
import SearchBox from '../components/SearchBox.js';
import MembersCard from '../components/MembersCard.js';

export default function CommunityMembersScreen({ navigation }) {
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

          <View style={styles.organizationLogoContainer}>
            <View style={styles.organizationLogoStory}>
              <Image style={styles.organizationLogoImage} source={require("../../assets/snapchat/CodeTalkLogo.png")}/>
            </View>
          </View>
          
          <View style={styles.organzationNameContainer}>
            <View style={styles.organizationName}>
              <Text style={{fontWeight: "600", fontSize: 23,}}>
                CodeTalk
              </Text>
              </View>
              <View style={styles.organizationDescription}>
              <Text style={{fontWeight: "300", fontSize: 17}}>
                Technology Training Program
              </Text>
              </View>          
          </View>
          <View style={styles.searchBoxContainer}>
              <SearchBox initialText={"Search Members"}/>
          </View>
          <View style={styles.membersContainer}>
              <MembersCard name="Ashley Beasley" imageUrl={require("../../assets/snapchat/Ashley.png")}/>
              <MembersCard name="Diego Godinez" imageUrl={require("../../assets/snapchat/Diego.png")}/>
              <MembersCard name="Vanessa Malabanan" imageUrl={require("../../assets/snapchat/Vanessa.png")}/>
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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  organizationLogoContainer: {
    marginTop: "10%",
    alignSelf: "center",

  },
  organizationLogoImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  organizationLogoStory: {
    backgroundColor: "yellow",
    borderRadius: 50,
    width: 105,
    height: 105,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  organzationNameContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
  },
  organizationName: {
    justiifyContent: "center",
  },
  organizationDescription: {
    alignItems: "center",
  },
  searchBoxContainer: {
    marginTop: "5%",
  },
  membersContainer: {
    marginTop: "5%",
  }
});