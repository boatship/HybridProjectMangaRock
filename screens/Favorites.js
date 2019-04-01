import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Header,ListItem } from "react-native-elements";
import Favorite2 from "../components/Favorite/Favorite";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          placement="right"
          backgroundColor="white"
          leftComponent={{
            text: "Favorites",
            style: { fontSize: 20, color: "black" }
          }}
          centerComponent={{ icon: "search", color: "black" }}
          rightComponent={{ icon: "more-vert", color: "black" }}
          containerStyle={{
            elevation: 4,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "grey",
            shadowOpacity: 0.5,
            shadowRadius: 10
          }}
        />
        <ListItem
          title={<Text>20 New Favorite Updates</Text>}
          leftAvatar={{ source: require("../static/Others/heart.png") }}
          rightElement={
            <Text style={{ color: "#45B4FF", fontWeight: "bold"}}>
            View
          </Text>
          }
          containerStyle={{
            height:60,
            margin:10,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> 5 hours ago</Text>
            </View>
          }
        />
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "bold"
          }}>
          9 manga{"                                          "}
          <Text style={{ color: "#45B4FF", fontWeight: "bold"}}>
            Sort by: Last Upda... ▾
          </Text>
        </Text>
        <ScrollView>
          <Favorite2 />
        </ScrollView>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
    container: {
      borderWidth: 0.5,
      borderColor: "#d6d7da"
    },
    containerFlex: {
      flex: 1,
      flexDirection: "column",
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: "#d6d7da"
    },
    textcolor: {
      marginTop: 10,
      color: "gray"
    }
  });
