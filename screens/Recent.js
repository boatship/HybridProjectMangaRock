import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Recent2 from '../components/Recent/Recent'

export default class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
        <ScrollView>
        <Header
          placement="right"
          backgroundColor="white"
          leftComponent={{ text: 'Recent', style: { fontSize: 20, color: 'black' } }}
          centerComponent={{ icon: 'search', color: 'black' }}
          rightComponent={{ icon: 'more-vert', color: 'black' }}
          containerStyle={{
            elevation: 4,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "grey",
            shadowOpacity: 0.5,
            shadowRadius: 10,
          }}
        />
          <Recent2/>
        </ScrollView>
        
      </View>
      
    );
  }
}
