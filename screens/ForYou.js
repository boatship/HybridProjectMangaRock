import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatureTitles from "../components/ForYou/FeatureTitles";
import FeatureCollections from "../components/ForYou/FeatureCollections";
import HotUpdates from "../components/ForYou/HotUpdates";
import ReadingList from "../components/ForYou/ReadingList";
import BeingRead from "../components/ForYou/BeingRead";
import Recommended from '../components/ForYou/Recommended';
import EditorsPicks from '../components/ForYou/EditorsPicks';
import FeaturedAuthors from '../components/ForYou/FeaturedAuthors'
import Popular from '../components/ForYou/Popular';
import Genres from '../components/ForYou/Genres';
import BecauseYouRead1 from '../components/ForYou/BecauseYouRead1';
import BecauseYouRead2 from '../components/ForYou/BecauseYouRead2';
import BecauseYouRead3 from '../components/ForYou/BecauseYouRead3';
import MAArtworks from '../components/ForYou/MAArtworks';
import Artwork from '../components/ForYou/Artwork';
import Indie from '../components/ForYou/Indie';
import DidYouKnow from '../components/ForYou/DidYouKnow';


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
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Feature titles</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Top Picks For You</Text>
          <FeatureTitles/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Feature collections</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Top Picks For You</Text>
          <FeatureCollections/>

          <Text style={{ marginLeft: 20 , marginTop: 20, fontSize: 15, fontWeight:'bold' }}>Hot Updates</Text>
          <HotUpdates/>           

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Updated daily</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Reading List</Text>
          <ReadingList/>

          <Text style={{ marginLeft: 20 , marginTop: 20, fontSize: 15, fontWeight:'bold' }}>Being Read Right Now                                    <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <BeingRead/>

          <Text style={{ marginLeft: 20 , marginTop: 20, fontSize: 15, fontWeight:'bold' }}>Recommended For You                                 <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <Recommended/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Updated weekly</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Editors' Picks</Text>
          <EditorsPicks/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Manga we love</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Featured Authors</Text>
          <FeaturedAuthors/>

          <Text style={{ marginLeft: 20 , marginTop: 20, fontSize: 15, fontWeight:'bold' }}>Popular This Week                                         <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <Popular/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Must-read titles</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Best By Genres</Text>
          <Genres/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Because you read</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>X - Epoch of the Dragon                                 <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <BecauseYouRead1/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Because you read</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Level 1 With S-rank Drop Rate Is The ...    <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <BecauseYouRead2/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Because you read</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Ascendance of a Bookworm                        <Text style={{color: '#45B4FF', fontWeight:'bold'}}>VIEW ALL</Text></Text>
          <BecauseYouRead3/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>Hand-picked collections by manga rock</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Manga & Anime Artworks</Text>
          <MAArtworks/>

          <Artwork/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>From indie creators</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Original Titles On Manga Rock</Text>
          <Indie/>

          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 10, color: '#FF5733' }}>App features & functions</Text>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight:'bold' }}>Did You Know ?</Text>
          <DidYouKnow/>

        </ScrollView>
      </View>
    );
  }
}
