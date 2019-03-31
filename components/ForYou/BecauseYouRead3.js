import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class BecauseYouRead3 extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            containerStyle={{
              height: 220,
              width: 100,
              marginRight: -5,
            }}
            image={require('../../static/Manga/PotionTanomi.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Potion Tanomi de...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>FUNA</Text>
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
            image={require('../../static/Manga/IsekaiOmotenashiGohan.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Isekai Omotenas...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Shinobumaru</Text>
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
            image={require('../../static/Manga/SeijoNoMaryoku.png')}
            >
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Seijo no Maryoku ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>TACHIBANA ...</Text>
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
            image={require('../../static/Manga/Kuma.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Kuma Kuma Kuma Bear</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Kumanano</Text>
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
            image={require('../../static/Manga/Accomplishments.webp')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Accomplishments ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Reia</Text>
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
export default BecauseYouRead3;
