import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Header, ListItem } from "react-native-elements";
import Download2 from "../components/Download/Download.js";
export default class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Header
            placement="right"
            backgroundColor="white"
            leftComponent={{
              text: "Downloads",
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

          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            2 manga{"                                                       "}
            <Text style={{ color: "#45B4FF", fontWeight: "bold" }}>
              Sort by: Modi... ▾
            </Text>
          </Text>

          <ScrollView>
            <Download2 />
          </ScrollView>
        </ScrollView>
        <ListItem
          title={<Text style={{marginLeft:130}}>2/3 free slot(s) used ></Text>}
          containerStyle={{
            height:20,
            marginTop: 240,
            borderRadius: 4,
            borderWidth: 0.8,
            borderColor: "#d6d7da"
          }}
        />
      </View>
    );
  }
}
