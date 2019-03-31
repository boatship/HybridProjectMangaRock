import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Latest2 from '../components/Latest/Latest'

export default class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15, fontWeight: 'bold' }}>599 manga                                 <Text style={{ color: '#45B4FF', fontWeight: 'bold' }}>Sort by: Last Updated ▾</Text></Text>
          <Latest2 />
        </ScrollView>
      </View>
    );
  }
}
