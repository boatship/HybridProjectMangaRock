import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";

class EditorsPicks extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#635167'
                    }}
                    image={require('../..//static/Others/Funniest.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#685D2A'
                    }}
                    image={require('../../static/Others/DramaManga.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/Detectives.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/Romances.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/Remarkables.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/Glasses.jpg')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/Survival.jpg')}>
                </Card>



            </ScrollView>
        );
    }
}

//make this component available to the app
export default EditorsPicks;
