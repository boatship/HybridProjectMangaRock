import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Backup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Backup & Restore'
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Backup;
