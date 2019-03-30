import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';

export default class Downloads extends Component {
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
          placement="right"
          backgroundColor="white"
          leftComponent={{ text: 'Downloads', style: { fontSize:20,color: 'black' } }}
          centerComponent={{icon : 'search', color: 'black'}}
          rightComponent={{ icon: 'md-more', color: 'black' }}
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