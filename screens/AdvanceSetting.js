import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AdvanceSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Advance Settings'
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default AdvanceSetting;
