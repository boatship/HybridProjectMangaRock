import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class indie extends Component {
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
                    image={require('../..//static/Others/indie1.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#685D2A'
                    }}
                    image={require('../../static/Others/indie2.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie3.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie4.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie5.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie6.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie7.png')}>
                </Card>

                <Card
                    containerStyle={{
                        height: 152,
                        width: 300,
                        marginRight: -5,
                        backgroundColor: '#3A3A3A'
                    }}
                    image={require('../../static/Others/indie8.png')}>
                </Card>


            </ScrollView>
        );
    }
}

//make this component available to the app
export default indie;
