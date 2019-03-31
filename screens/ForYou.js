import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: 'orange' }}>Feature titles</Text>
          <Text style={{ marginLeft: 20 }}>Top Picks For You</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Card
              containerStyle={{
                height: 325,
                width: 300,
                marginRight: -5,
                backgroundColor: '#635167'
              }}
              image={require('../static/resentment-2.jpg')}>

              <View style={{ flex: 1 }}>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                  <View style={{ flex: 1 }}>

                    <Image
                      style={{ width: 75, height: 115, marginBottom: 10, }}
                      source={require('../static/resentment.webp')}
                    />
                    <View style={{ borderTopColor: '#8D7593', borderTopWidth: 0.5, width: 275 }}>
                      <Text style={{ color: 'white', marginTop: 5 }}>READ NOW</Text>
                    </View>
                  </View>
                  <View style={{ flex: 2.5, marginLeft: 10 }}>
                    <Text style={{ marginTop: 20, marginBottom: 10, color: 'white' }}>
                      Resentment
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Horror,Drama,Supernatural
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Ongoing · 6 chapters
                  </Text>
                    <Ionicons
                      name="md-heart-empty"
                      size={20}
                      color="white"
                      style={{ marginLeft: 145, marginTop: 42.5 }}
                    />
                    <Ionicons
                      name="md-more"
                      size={20}
                      color="white"
                      style={{ marginTop: -20, marginLeft: 185 }}
                    />
                  </View>

                </View>
              </View>

              <LinearGradient
                style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                colors={['rgba(99, 81, 103, 0.1)', 'rgba(99, 81, 103, 1)']}
                pointerEvents={'none'}
              />
            </Card>

            <Card
              containerStyle={{
                height: 325,
                width: 300,
                marginRight: -5,
                backgroundColor: '#685D2A'
              }}
              image={require('../static/samuraisho-2.jpg')}>

              <View style={{ flex: 1 }}>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                  <View style={{ flex: 1 }}>

                    <Image
                      style={{ width: 75, height: 115, marginBottom: 10, }}
                      source={require('../static/samuraisho.jpg')}
                    />
                    <View style={{ borderTopColor: '#90813C', borderTopWidth: 0.25, width: 275 }}>
                      <Text style={{ color: 'white', marginTop: 5 }}>READ NOW</Text>
                    </View>
                  </View>
                  <View style={{ flex: 2.5, marginLeft: 10 }}>
                    <Text style={{ marginTop: 20, marginBottom: 10, color: 'white' }}>
                      Samurai Shodown (Yuuki Miyoshi)
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Historical, Martial Arts, Supernatu...
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Completed · 6 chapters
                  </Text>
                    <Ionicons
                      name="md-heart-empty"
                      size={20}
                      color="white"
                      style={{ marginLeft: 145, marginTop: 42.5 }}
                    />
                    <Ionicons
                      name="md-more"
                      size={20}
                      color="white"
                      style={{ marginTop: -20, marginLeft: 185 }}
                    />
                  </View>

                </View>
              </View>

              <LinearGradient
                style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                colors={['rgba(104, 93, 42, 0.1)', 'rgba(104, 93, 42, 1)']}
                pointerEvents={'none'}
              />
            </Card>

            <Card
              containerStyle={{
                height: 325,
                width: 300,
                marginRight: -5,
                backgroundColor: '#3A3A3A'
              }}
              image={require('../static/segregated-2.jpg')}>

              <View style={{ flex: 1 }}>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                  <View style={{ flex: 1 }}>

                    <Image
                      style={{ width: 75, height: 115, marginBottom: 10, }}
                      source={require('../static/segregated.png')}
                    />
                    <View style={{ borderTopColor: '#A3A3A3', borderTopWidth: 0.25, width: 275 }}>
                      <Text style={{ color: 'white', marginTop: 5 }}>READ NOW</Text>
                    </View>
                  </View>
                  <View style={{ flex: 2.5, marginLeft: 10 }}>
                    <Text style={{ marginTop: 20, marginBottom: 10, color: 'white' }}>
                      Segregated World
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Fantasy, Adventure, Action
                  </Text>
                    <Text style={{ color: '#CFCFCF', fontSize: 12 }}>
                      Ongoing · 4 chapters
                  </Text>
                    <Ionicons
                      name="md-heart-empty"
                      size={20}
                      color="white"
                      style={{ marginLeft: 145, marginTop: 42.5 }}
                    />
                    <Ionicons
                      name="md-more"
                      size={20}
                      color="white"
                      style={{ marginTop: -20, marginLeft: 185 }}
                    />
                  </View>

                </View>
              </View>

              <LinearGradient
                style={{ position: 'absolute', top: -50, bottom: 0, width: '107.125%', height: 50 }}
                colors={['rgba(58, 58, 58, 0.1)', 'rgba(58, 58, 58, 1)']}
                pointerEvents={'none'}
              />
            </Card>



          </ScrollView>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: 'orange' }}>Feature collections</Text>
          <Text style={{ marginLeft: 20 }}>Top Picks For You</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            containerStyle={{
              height: 240,
              width: 300,
              marginRight: -5,
            }}
          >
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15 }}>Short and Humorous Manga to Read ...</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Read these sgort and entertaining stories</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>to rewind before bedtime. Each chapter is ...</Text>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/GagMangaBiyori.webp')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/Mako-sanToHachisuka-kun.webp')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/TheDragonNextDoor.webp')}
                    /></View>
                </View>
                <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 }}>CHECK IT OUT</Text>

              </View>
            </View>


          </Card>

          <Card
            containerStyle={{
              height: 240,
              width: 300,
              marginRight: -5,
            }}
          >
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15 }}>Mafia Gangs That will Blow Your Mind</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Mafia are known to have an array of</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>weapons, scary and tough gangs, and a ma...</Text>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/baccano.jpg')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/BananaFish.jpg')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/BloodyMonday.jpg')}
                    /></View>
                </View>
                <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 }}>CHECK IT OUT</Text>

              </View>
            </View>


          </Card>

          <Card
            containerStyle={{
              height: 240,
              width: 300,
              marginRight: -5,
            }}
          >
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15 }}>Action-Packed Ninja Series You Must ...</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>Are you interested in ninjas and wanted to</Text>
                <Text style={{ color: '#7A7A7A', fontSize: 13.25 }}>read manga about them? Then this is the r...</Text>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/Basilisk.webp')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/BeHeun.webp')}
                    /></View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image
                      style={{ width: 80, height: 120, marginTop: 10, marginRight: 10 }}
                      source={require('../static/DontenzNiWarau.webp')}
                    /></View>
                </View>
                <Text style={{ textAlign: 'center', color: '#45B4FF', marginTop: 140 }}>CHECK IT OUT</Text>

              </View>
            </View>
          </Card>
          </ScrollView>

          <Text style={{ marginLeft: 20 , marginTop: 20 }}>Hot Updates</Text>
            <ScrollView>
          <Card
            containerStyle={{
              height: 220,
              width: 100,
              marginRight: -5,
            }}
            image={require('../static/LegendOfPhoenix.webp')}>
            <View style={{ flex: 1}}>
            <View style={{flex:2}}>
              <Text>Legend of Phoenix</Text>
              <Text style={{ color: '#7A7A7A', fontSize: 12 }}>5 Days ago</Text>
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
        </ScrollView>
      </View>
    );
  }
}
