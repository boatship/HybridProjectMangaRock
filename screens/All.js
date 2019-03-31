import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import All2 from '../components/All/All'

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15, fontWeight: 'bold' }}>17747 manga                                           <Text style={{ color: '#45B4FF', fontWeight: 'bold' }}>Sort by: Rank ▾</Text></Text>
          <Text style={{ marginLeft: 20, marginTop: 20, color: "#909090", fontSize: 12 }}>1 - 1k</Text>
          <All2 />
        </ScrollView>
      </View>
    );
  }
}
