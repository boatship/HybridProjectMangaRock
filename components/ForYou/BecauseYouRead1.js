import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class BecauseYouRead1 extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            containerStyle={{
              height: 220,
              width: 100,
              marginRight: -5,
            }}
            image={require('../../static/Manga/YuanZun.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Yuan Zun</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Tianma pota...</Text>
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
            image={require('../../static/Manga/HolyLord.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Holy Lord</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Meng Ru She...</Text>
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
            image={require('../../static/Manga/TenThousandPaths.png')}
            >
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Ten Thousand ...</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chudao Man...</Text>
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
            image={require('../../static/Manga/VersatileMage.jpg')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Versatile Mage</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chaos</Text>
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

          </ScrollView>
        );
    }
}

//make this component available to the app
export default BecauseYouRead1;
