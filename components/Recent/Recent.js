import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Card, Header, Avatar, ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
class Recent extends Component {
  render() {
    return (
      //   <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
      //     <Card
      //       containerStyle={{
      //         height: 220,
      //         width: 100,
      //         marginRight: -5,
      //       }}
      //       image={require('../../static/Manga/VisionLand.webp')}>
      //       <View style={{ flex: 1 }}>
      //         <View style={{ flex: 2 }}>
      //         <Image
      //         resizeMode="cover"
      //         source={require('../../static/Manga/VisionLand.webp')}
      //       />
      //           <Text>Vision Land</Text>
      //           <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chapter 15</Text>
      //         </View>
      //         <View style={{ flex: 1 }}>
      //           <Ionicons
      //             name="md-more"
      //             size={20}
      //             color="#7A7A7A"
      //             style={{ marginLeft: 75 }}
      //           />
      //         </View>
      //       </View>
      //     </Card>

      //     <Card
      //       containerStyle={{
      //         height: 220,
      //         width: 100,
      //         marginRight: -5,
      //       }}
      //       image={require('../../static/Manga/DragonRecipe.webp')}>
      //       <View style={{ flex: 1 }}>
      //         <View style={{ flex: 2 }}>
      //           <Text>Dragon Recipe</Text>
      //           <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chapter 2</Text>
      //         </View>
      //         <View style={{ flex: 1 }}>
      //           <Ionicons
      //             name="md-more"
      //             size={20}
      //             color="#7A7A7A"
      //             style={{ marginLeft: 75 }}
      //           />
      //         </View>
      //       </View>
      //     </Card>

      //     <Card
      //       containerStyle={{
      //         height: 220,
      //         width: 100,
      //         marginRight: -5,
      //       }}
      //       image={require('../../static/Manga/TheUltimateSchemingSystem.jpg')}
      //     >
      //       <View style={{ flex: 1 }}>
      //         <View style={{ flex: 2 }}>
      //           <Text>The Ultimate S...</Text>
      //           <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chapter 40</Text>
      //         </View>
      //         <View style={{ flex: 1 }}>
      //           <Ionicons
      //             name="md-more"
      //             size={20}
      //             color="#7A7A7A"
      //             style={{ marginLeft: 75 }}
      //           />
      //         </View>
      //       </View>
      //     </Card>

      //     <Card
      //       containerStyle={{
      //         height: 220,
      //         width: 100,
      //         marginRight: -5,
      //       }}
      //       image={require('../../static/Manga/CateLand.webp')}>
      //       <View style={{ flex: 1 }}>
      //         <View style={{ flex: 2 }}>
      //           <Text>Cate Land</Text>
      //           <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chapter 4</Text>
      //         </View>
      //         <View style={{ flex: 1 }}>
      //           <Ionicons
      //             name="md-more"
      //             size={20}
      //             color="#7A7A7A"
      //             style={{ marginLeft: 75 }}
      //           />
      //         </View>
      //       </View>
      //     </Card>

      //     <Card
      //       containerStyle={{
      //         height: 220,
      //         width: 100,
      //         marginRight: -5,
      //       }}
      //       image={require('../../static/Manga/TheDragonMaster.jpg')}>
      //       <View style={{ flex: 1 }}>
      //         <View style={{ flex: 2 }}>
      //           <Text>The Dragon Master</Text>
      //           <Text style={{ color: '#7A7A7A', fontSize: 12 }}>Chapter 8</Text>
      //         </View>
      //         <View style={{ flex: 1 }}>
      //           <Ionicons
      //             name="md-more"
      //             size={20}
      //             color="#7A7A7A"
      //             style={{ marginLeft: 75 }}
      //           />
      //         </View>
      //       </View>
      //     </Card>

      //   </ScrollView>

      <ScrollView >
        <ListItem
          title={<Text>Vision Land</Text>}
          leftElement={
            <Image
              source={require("../../static/Manga/VisionLand.webp")}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Chapter 8 </Text>
              <Text style={styles.textcolor}> 5 hours ago</Text>
            </View>
          }
        />

        <ListItem
          title={<Text>Dragon Recipe</Text>}
          leftElement={
            <Image
              source={require("../../static/Manga/DragonRecipe.webp")}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Chapter 4 </Text>
              <Text style={styles.textcolor}> 10 hours ago</Text>
            </View>
          }
        />

<ListItem
          title={<Text>Tales of Demons and Gods</Text>}
          leftElement={
            <Image
              source={require("../../static/Manga/TalesOfDemonsAndGods.jpg")}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Chapter 45 </Text>
              <Text style={styles.textcolor}> 12 hours ago</Text>
            </View>
          }
        />

<ListItem
          title={<Text>The Quintessential</Text>}
          leftElement={
            <Image
              source={require('../../static/Manga/TheQuintessential.png')}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Chapter 12 </Text>
              <Text style={styles.textcolor}> 14 hours ago</Text>
            </View>
          }
        />

<ListItem
          title={<Text>One Piece</Text>}
          leftElement={
            <Image
              source={require('../../static/Manga/OnePiece.jpg')}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Vol.TBD Chapter 938: Her Secret </Text>
              <Text style={styles.textcolor}> Yesterday </Text>
            </View>
          }
        />

<ListItem
          title={<Text>The Promised Neverland</Text>}
          leftElement={
            <Image
              source={require('../../static/Manga/ThePromisedNeverland.jpg')}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Vol.TBD Chapter 129: Something i sh...</Text>
              <Text style={styles.textcolor}> Yesterday </Text>
            </View>
          }
        />
        <ListItem
          title={<Text>Black Cover</Text>}
          leftElement={
            <Image
              source={require('../../static/Manga/BlackClover.jpg')}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Vol.20 Chapter 199 </Text>
              <Text style={styles.textcolor}> Yesterday </Text>
            </View>
          }
        />
                <ListItem
          title={<Text>Black Cover</Text>}
          leftElement={
            <Image
              source={require('../../static/Manga/BlackClover.jpg')}
              style={{ width: 70, height: 90 }}
              resizeMode="center"
            />
          }
          rightElement={
            <Ionicons
              name="md-more"
              size={25}
              color="black"
              style={{ marginRight: 6 }}
            />
          }
          containerStyle={{
            height: 100,
            //marginBottom:,
            borderRadius: 1,
            borderWidth: 0.5,
            borderColor: "#d6d7da"
          }}
          subtitle={
            <View>
              <Text style={styles.textcolor}> Vol.20 Chapter 199 </Text>
              <Text style={styles.textcolor}> Yesterday </Text>
            </View>
          }
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  containerFlex: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  textcolor: {
    marginTop: 10,
    color: "gray"
  }
});

const list = [
  {
    //title: "Vision Land",
    //subtitle: "3.8.4_definitive"
  }
];

//make this component available to the app
export default Recent;
