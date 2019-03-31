import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Recommended extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            containerStyle={{
              height: 220,
              width: 100,
              marginRight: -5,
            }}
            image={require('../../static/Manga/VisionLand.webp')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Vision Land</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Magic D</Text>
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
            image={require('../../static/Manga/DragonRecipe.webp')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Dragon Recipe</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Yeop</Text>
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
            image={require('../../static/Manga/TheUltimateSchemingSystem.jpg')}
            >
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>The Ultimate S...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chu Ying ...</Text>
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
            image={require('../../static/Manga/CateLand.webp')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Cate Land</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Doris</Text>
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
            image={require('../../static/Manga/TheDragonMaster.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>The Dragon Master</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Dobin</Text>
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
export default Recommended;
