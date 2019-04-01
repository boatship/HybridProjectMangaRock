import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

export default class Downloads extends Component {
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
          leftComponent={{ text: 'Downloads', style: { fontSize: 20, color: 'black' } }}
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
        </ScrollView>
      </View>
    );
  }
}
