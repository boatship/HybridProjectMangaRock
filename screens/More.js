import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  List
} from "react-native";
import { Header, Avatar, ListItem } from "react-native-elements";
import MaterialTabs from "react-native-material-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
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
          rightComponent={{
            icon: "bell",
            color: "black",
            type: "font-awesome"
          }}
        />
        <SafeAreaView style={styles.container} />
        <View>
          <Avatar
            size="medium"
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            containerStyle={{ marginLeft: 20, marginTop: 20 }}
          />
        </View>
        <View>
          <Text> Configuration </Text>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View>
        <View>
          <Text> Upgrade </Text>
          {list2.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View>
        <View>
          <Text> Add-ons </Text>
          {list3.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const list = [
  {
    title: "Backup & Restore",
    icon: "backup"
  },
  {
    title: "Advance Setting",
    icon: "settings"
  },
  {
    title: "Language",
    icon: "language"
  }
];

const list2 = [
  {
    title: "Upgrade to Premium",
    icon: "backup"
  }
];

const list3 = [
  {
    title: "Artworks",
    icon: "backup"
  }
];

const list4 = [
  {
    title: "Support Center",
    icon: "backup"
  }
];
