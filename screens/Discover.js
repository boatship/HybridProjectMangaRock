import React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import All from "./All";
import ForYou from "./ForYou";
import Latest from "./Latest";

const TabScreen = createMaterialTopTabNavigator(
  {
    "For You": { screen: ForYou },
    All: { screen: All },
    Latest: { screen: Latest }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#45B4FF",
      inactiveTintColor: "#909090",
      style: {
        backgroundColor: "#FFFFFF"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#45B4FF",
        borderBottomWidth: 2
      }
    }
  }
);

const Discover = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFFFFF",
        borderBottomColor: "transparent",
        borderBottomWidth: 0,
        shadowColor: "transparent",
        elevation: 0,
        fontWeight: 'normal',
      },
      headerTintColor: "black",
      title: "Manga Rock ▾",
      // headerLeft: (
      //   <View>
      //     <Ionicons
      //       name="md-arrow-dropdown"
      //       size={20}
      //       color="black"
      //       style={{ marginLeft: 200 }}
      //     />
      //   </View>
      // ),
      headerRight: (
        <View>
          <Ionicons
            name="md-search"
            size={20}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default createAppContainer(Discover);

// export default class Discover extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   state = {
//     selectedTab: 0,
//   };

//   setTab = selectedTab => {
//     this.setState({ selectedTab });
// };
// render() {
//   return (
//     <View>

//       <Header
//         placement="left"
//         backgroundColor="white"
//         leftComponent={{ text: 'Manga Rock', style: { fontSize:20,color: 'black' } }}
//         centerComponent={{icon : 'arrow-drop-down', color: 'black'}}
//         rightComponent={{ icon: 'search', color: 'black' }}
//       />

//       <SafeAreaView style={styles.container}>
//       <MaterialTabs
//         items={['One', 'Two', 'Three', 'Four', 'Five']}
//         selectedIndex={this.state.selectedTab}
//         onChange={this.setTab}
//         barColor="#1fbcd2"
//         indicatorColor="#fffe94"
//         activeTextColor="white"
//       />
//     </SafeAreaView>
//     <ScrollView>

//     </ScrollView>
//     </View>

//   );
// }
// }
