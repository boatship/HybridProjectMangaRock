import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class BecauseYouRead2 extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            containerStyle={{
              height: 220,
              width: 100,
              marginRight: -5,
            }}
            image={require('../../static/Manga/TheMasterOfRagnarok.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>The Master of Ragnar...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Seiichi Tak...</Text>
            </View>
            <View style={{flex:1}}>
            <Ionicons
                      name="md-more"
                      size={20}
                      color="#7A7A7A"
                      style={{marginLeft:75}}
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
            image={require('../../static/Manga/LetsManageTheTower.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Let's Manage ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Hayakaze</Text>
            </View>
            <View style={{flex:1}}>
            <Ionicons
                      name="md-more"
                      size={20}
                      color="#7A7A7A"
                      style={{marginLeft:75}}
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
            image={require('../../static/Manga/LazyDungeonMaster.jpg')}
            >
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Lazy Dungeon ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Supana Onik...</Text>
            </View>
            <View style={{flex:1}}>
            <Ionicons
                      name="md-more"
                      size={20}
                      color="#7A7A7A"
                      style={{marginLeft:75}}
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
            image={require('../../static/Manga/ZettaiNiYatte.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Zettai ni Yatte wa I...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Shimesaba</Text>
            </View>
            <View style={{flex:1}}>
            <Ionicons
                      name="md-more"
                      size={20}
                      color="#7A7A7A"
                      style={{marginLeft:75}}
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
            image={require('../../static/Manga/OreDakeHaireru.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Ore dake Haireru Ka...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Meguru Seto</Text>
            </View>
            <View style={{flex:1}}>
            <Ionicons
                      name="md-more"
                      size={20}
                      color="#7A7A7A"
                      style={{marginLeft:75}}
                    />
            </View>
            </View>
          </Card>

          
          </ScrollView>
        );
    }
}

//make this component available to the app
export default BecauseYouRead2;
