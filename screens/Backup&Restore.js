import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <Text style={{ marginTop: 20, marginLeft: 15, color: '#7A7A7A' }}> Perform a complete backup of your favorite manga, </Text>
        <Text style={{ marginLeft: 18, color: '#7A7A7A' }}>recently read manga.</Text>
        <Text style={{ marginTop: 5, marginLeft: 15, color: '#45B4FF' }}> Read more </Text>
        <View style={{ width: '90%', marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button
            onPress={() => this.props.navigation.navigate('BackUpRestore')}
            title="CREATE A NEW BACKUP"
            color="#45B4FF"
          />
        </View>
        <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>3/5 slot(s) used</Text>

        <Card
          containerStyle={{
            height: 85,
            width: '90%',
            marginLeft: 'auto', marginRight: 'auto'
          }}
        >
          <Text style={{}}>Mar 27, 2019 at 04:02 PM                                     <Ionicons
            name="md-trash"
            size={20}
            color="#7A7A7A"
            style={{ marginLeft: 75 }}
          /></Text>

          <Text style={{marginTop: 10, textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>RESTORE</Text>
        </Card>

        <Card
          containerStyle={{
            height: 85,
            width: '90%',
            marginLeft: 'auto', marginRight: 'auto'
          }}
        >
          <Text style={{}}>Dec 5, 2018 at 01:27 PM                                        <Ionicons
            name="md-trash"
            size={20}
            color="#7A7A7A"
            style={{ marginLeft: 75 }}
          /></Text>

          <Text style={{marginTop: 10, textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>RESTORE</Text>
        </Card>

        <Card
          containerStyle={{
            height: 85,
            width: '90%',
            marginLeft: 'auto', marginRight: 'auto'
          }}
        >
          <Text style={{}}>Jul 12, 2018 at 10:11 AM                                       <Ionicons
            name="md-trash"
            size={20}
            color="#7A7A7A"
            style={{ marginLeft: 75 }}
          /></Text>

          <Text style={{marginTop: 10, textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>RESTORE</Text>
        </Card>

        <Text style={{ marginTop: 20, marginLeft: 15, color: '#7A7A7A', fontWeight: 'bold' }}> Legacy Backup </Text>

        <Card
          containerStyle={{
            height: 85,
            width: '90%',
            marginLeft: 'auto', marginRight: 'auto'
          }}
        >
          <Text style={{}}>May 21, 2018 at 07:26 PM                                     <Ionicons
            name="md-trash"
            size={20}
            color="#7A7A7A"
            style={{ marginLeft: 75 }}
          /></Text>

          <Text style={{marginTop: 10, textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>RESTORE</Text>
        </Card>
        <Text style={{ marginTop: 5, marginLeft: 15, color: '#7A7A7A' }}> This backup is generated using an old version of Manga </Text>
        <Text style={{ marginLeft: 18, color: '#7A7A7A' }}>Rock.</Text>
      </View>
    );
  }
}

export default Backup;
