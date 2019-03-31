import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class BeingRead extends Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card
          containerStyle={{
            height: 220,
            width: 100,
            marginRight: -5,
          }}
          image={require('../../static/Manga/EverlastingGodOfSword.jpg')}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
              <Text>Everlasting God of Sw...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Meng Bai</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="md-more"
                size={20}
                color="#7A7A7A"
                style={{ marginLeft: 75 }}
              />
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            height: 220,
            width: 100,
            marginRight: -5,
          }}
          image={require('../../static/Manga/Mairimashita.jpg')}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
              <Text>Mairimashita! ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Nishi Osamu</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="md-more"
                size={20}
                color="#7A7A7A"
                style={{ marginLeft: 75 }}
              />
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            height: 220,
            width: 100,
            marginRight: -5,
          }}
          image={require('../../static/Manga/TalesOfDemonsAndGods.jpg')}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
              <Text>Tales of Demons a...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Mad Snail</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="md-more"
                size={20}
                color="#7A7A7A"
                style={{ marginLeft: 75 }}
              />
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            height: 220,
            width: 100,
            marginRight: -5,
          }}
          image={require('../../static/Manga/ThePromisedNeverland.jpg')}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
              <Text>The Promised ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Kaiu Shirai</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="md-more"
                size={20}
                color="#7A7A7A"
                style={{ marginLeft: 75 }}
              />
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            height: 220,
            width: 100,
            marginRight: -5,
          }}
          image={require('../../static/Manga/TheQuintessential.png')}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
              <Text>The Quintessential ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Negi Haruba</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Ionicons
                name="md-more"
                size={20}
                color="#7A7A7A"
                style={{ marginLeft: 75 }}
              />
            </View>
          </View>
        </Card>

      </ScrollView>
    );
  }
}

//make this component available to the app
export default BeingRead;
