import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer , createBottomTabNavigator } from 'react-navigation';
import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Recent from '../screens/Recent';
import Downloads from '../screens/Downloads';
import More from '../screens/More';

const AppNavigator = createStackNavigator(
  {
    DISCOVER: {
      screen: Discover
    },
    FAVORITES: {
      screen: Favorites
    },
    RECENT: {
      screen: Recent
    },
    DOWNLOADS: {
      screen: Downloads
    },
    MORE: {
      screen: More
    }
  },
  {
    initialRouteName: "DISCOVER"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    DISCOVER: {
      screen: Discover
    },
    FAVORITES: {
      screen: Favorites
    },
    RECENT: {
      screen: Recent
    },
    DOWNLOADS: {
      screen: Downloads
    },
    MORE: {
      screen: More
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'DISCOVER') {
          iconName = `md-compass`;
        } else if (routeName === 'FAVORITES') {
          iconName = `md-heart`;
        } else if (routeName === 'RECENT') {
          iconName = `md-time`;
        } else if (routeName === 'DOWNLOADS') {
          iconName = `md-download`;
        } else if (routeName === 'MORE') {
          iconName = `ios-more`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#45B4FF',
      inactiveTintColor: '#909090',
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
