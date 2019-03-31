import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

class DidYouKnow extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../..//static/Others/Filter&Search.png')}>
                    <Text></Text>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight:'bold'}}>Filter & Search</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>Filter is now integrated into</Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>Search</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center', color: '#45B4FF', fontWeight:'bold'}}>TRY IT OUT</Text>
                </Card>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../../static/Others/SwitchThemes.png')}>
                    <Text></Text>
                    <Text style={{textAlign: 'center' , fontSize: 18, fontWeight:'bold'}}>Switch Themes</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>Miss the old, dark theme?</Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>It's still here!</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center', color: '#45B4FF', fontWeight:'bold'}}>SHOW ME HOW</Text>
                </Card>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../../static/Others/Backup&Restore.png')}>
                    <Text></Text>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight:'bold'}}>Backup & Restore</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>Safeguard your data on our</Text>
                    <Text style={{textAlign: 'center',color: '#7A7A7A'}}>cloud</Text>
                    <Text></Text>
                    <Text style={{textAlign: 'center', color: '#45B4FF', fontWeight:'bold'}}>CHECK IT OUT</Text>
                </Card>

            </ScrollView>
        );
    }
}

//make this component available to the app
export default DidYouKnow;
