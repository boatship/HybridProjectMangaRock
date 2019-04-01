import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Card, Header, Avatar, ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Downloads extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
                    containerStyle={{
                        height: 220,
                        width: 114,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/BlackClover.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>Black Cover</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>190 downloa...</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 87.5 }}
                            />
                        </View>
                    </View>
                </Card>

                <Card
                    containerStyle={{
                        height: 220,
                        width: 114,
                        marginRight: -5,
                    }}
                    image={require('../../static/Manga/ShieldHero.jpg')}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2 }}>
                            <Text>The Rising of the Shield ...</Text>
                            <Text style={{ color: '#7A7A7A', fontSize: 12 }}>45 download...</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Ionicons
                                name="md-more"
                                size={20}
                                color="#7A7A7A"
                                style={{ marginLeft: 87.5 }}
                            />
                        </View>
                    </View>
                </Card>
                </ScrollView>
        </View>
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

const list = [
  {
    //title: "Vision Land",
    //subtitle: "3.8.4_definitive"
  }
];

//make this component available to the app
export default Downloads;