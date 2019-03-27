import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';

export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  state = {
    selectedTab: 0,
  };
 
  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  render() {
    return (
      <View>
        
        <Header
          placement="left"
          backgroundColor="white"
          leftComponent={{ text: 'Manga Rock', style: { fontSize:20,color: 'black' } }}
          centerComponent={{icon : 'arrow-drop-down', color: 'black'}}
          rightComponent={{ icon: 'search', color: 'black' }}
        />
        
        <SafeAreaView style={styles.container}>
        <MaterialTabs
          items={['One', 'Two', 'Three', 'Four', 'Five']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab}
          barColor="#1fbcd2"
          indicatorColor="#fffe94"
          activeTextColor="white"
        />
      </SafeAreaView>
      <ScrollView>
      
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});