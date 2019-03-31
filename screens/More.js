import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  List,
  Flex
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
            containerStyle={{
              elevation: 4,
              shadowOffset: { width: 5, height: 5 },
              shadowColor: "grey",
              shadowOpacity: 0.5,
              shadowRadius: 10,
            }}
          />
          <SafeAreaView />
          <View style={styles.container}>
                <Avatar
                  size="large"
                  rounded
                  icon={{ name: "user", type: "font-awesome" }}
                  containerStyle={{ marginLeft: 20, marginTop: 10,marginBottom: 10 }}
                />
          </View>
          <View style={styles.container}  >
            <Text style={styles.textcolor}> Configuration </Text>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.textcolor}> Upgrade </Text>
            {list2.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.textcolor}> Add-ons </Text>
            {list3.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.textcolor}> Support </Text>
            {list4.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))}
          </View>
          <View style={styles.container}>
            <Text style={styles.textcolor}> General </Text>
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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  textcolor: {
    marginTop: 10,
    color: 'gray',
  },
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
    subtitle: "3.8.4_definitive"
  },
  {
    title: "Check for Updates"
  },
  { title: "About Us" }
];
