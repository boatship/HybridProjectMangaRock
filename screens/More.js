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
        <ScrollView>
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
          <Flex>
          <Avatar
            size="medium"
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            containerStyle={{ marginLeft: 20, marginTop: 20 }}
          />
          </Flex>
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
        <View>
          <Text> Support </Text>
          {list4.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View>
        <View>
          <Text> General </Text>
          {list5.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              subtitle={item.subtitle}
            />
          ))}
        </View>
        </ScrollView>
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
    title: "Support Center"
  }
];

const list5 = [
  {
    title: "Version",
    subtitle: '3.8.4_definitive'
  },
  {
    title: "Check for Updates"
  },
  {title: "About Us"}
];
