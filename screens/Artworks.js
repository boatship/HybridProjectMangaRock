import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Artworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Artworks'
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Artworks;
