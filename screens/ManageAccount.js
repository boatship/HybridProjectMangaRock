import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  List,
  Flex,
  onPress,
  Image
} from "react-native";
import { Header, Avatar, ListItem } from "react-native-elements";
import MaterialTabs from "react-native-material-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Download2 from "../components/Download/Download.js";

class ManageAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Manage Account"
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F2F2F2" }}>
        <ScrollView>
          <View style={{ backgroundColor: "#F2F2F2" }}>
            <Avatar
              size="large"
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={{
                marginLeft: 170,
                marginTop: 15,
                marginBottom: 30
              }}
            />

            <ListItem
              title={
                <View>
                  <Text style={{ marginLeft: 10, color: "gray" }}>Email</Text>
                  <Text style={{ marginLeft: 10 }}>chanin.t@mail.com</Text>
                </View>
              }
              subtitle={
                <View style={{ marginTop: 5 }}>
                  <Text style={{ marginLeft: 10, color: "gray" }}>
                    Username
                  </Text>
                  <Text style={{ marginLeft: 10 }}>tman</Text>
                  <Text
                    style={{
                      color: "#45B4FF",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginLeft: 150
                    }}
                  >
                    EDIT PROFILE
                  </Text>
                </View>
              }
              containerStyle={{
                borderRadius: 4,
                borderWidth: 0.8,
                borderColor: "#d6d7da"
              }}
            />

            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontSize: 15,
                fontWeight: "bold",
                color: "gray"
              }}
            >
              ROCKS{"                                                         "}
              <Text style={{ color: "#45B4FF", fontWeight: "bold" }}>
                WHAT IS ROCK?
              </Text>
            </Text>

            <ListItem
              title={<Text>You Currently have</Text>}
              rightAvatar={{ source: require("../static/Others/Rock.png") }}
              containerStyle={{
                marginTop: 10
              }}
            />
            <ListItem
              title={<Text>Earn More Rocks</Text>}
              leftAvatar={{ source: require("../static/Others/RockEarn.png") }}
              containerStyle={{}}
            />
            <ListItem
              title={<Text>Rock History</Text>}
              leftAvatar={{
                source: require("../static/Others/RockHistory.png")
              }}
            />

            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontSize: 15,
                fontWeight: "bold",
                color: "gray"
              }}
            >
              LINKED DEVICE
            </Text>

            <ListItem
              title={<Text style={{fontSize: 15,
                fontWeight: "bold"}}>3 out of 5</Text>}
                subtitle={
                  <View style={{ marginTop: 5 }}>
                    <Text style={{ marginLeft: 10,color: "gray" }}>You can link up to 5 Android devices with one Manga Rock Account</Text>
                    <Text
                      style={{
                        color: "#45B4FF",
                        fontWeight: "bold",
                        marginTop: 5,
                        marginLeft: 170
                      }}
                    >
                      UNLINK
                    </Text>
                  </View>
                }
              containerStyle={{
                marginTop: 10
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const list = [
  {
    title: "Backup & Restore",
    onPress: "BackUpRestore"
  }
];

export default ManageAccount;
