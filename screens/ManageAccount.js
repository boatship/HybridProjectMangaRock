import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ManageAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Manage Account'
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ManageAccount;
