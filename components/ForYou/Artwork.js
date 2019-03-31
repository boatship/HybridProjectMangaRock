import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class artwork extends Component {
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
                    image={require('../..//static/Others/artwork1.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#685D2A'
                    }}
                    image={require('../../static/Others/artwork2.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/artwork3.png')}>
                </Card>

            </ScrollView>
        );
    }
}

//make this component available to the app
export default artwork;
