import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView,Flex } from "react-native";
import { Header } from "react-native-elements";
import { Avatar } from "react-native-elements";

export default class More extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Header
          placement="left"
          backgroundColor="white"
          leftComponent={{
            text: "More",
            style: { fontSize: 20, color: "black" }
          }}
          centerComponent={{}}
          rightComponent={{ icon: "bell", color: "black", type: "font-awesome" }}
        />
        <div>
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome" }}
          /> <text></text>
        </div>
      </View>
    );
  }
}
