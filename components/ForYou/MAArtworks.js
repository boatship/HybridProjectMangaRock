import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class MAArtworks extends Component {
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../..//static/Others/PrincessInBlack.png')}>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Princess In Black</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>Unrivaled charm of ladies in</Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>black costumes</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>VIEW NOW</Text>
                </Card>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../../static/Others/EpicFateSeries.png')}>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Epic Fate Series</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>Powerful battle stances of</Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>beloved Fate characters</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>VIEW NOW</Text>
                </Card>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../../static/Others/CaughtInTheRain.png')}>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Caught In The Rain</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>Listen to the rhythm of the</Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>falling rain ♪</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>VIEW NOW</Text>
                </Card>

                <Card
                    containerStyle={{
                        height: 275,
                        width: 200,
                        marginRight: -5,
                    }}
                    image={require('../../static/Others/WantMore.png')}>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Want more ?</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>Check out hundreds more</Text>
                    <Text style={{ textAlign: 'center', color: '#7A7A7A' }}>of HD artworks!</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'center', color: '#45B4FF', fontWeight: 'bold' }}>VIEW NOW</Text>
                </Card>


            </ScrollView>
        );
    }
}

//make this component available to the app
export default MAArtworks;
