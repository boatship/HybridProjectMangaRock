import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:0
    };

    
  }

  

  static navigationOptions = {
    title: 'Language'
  };

  render() { var radio_props = [
    {label: 'English', value: 0 },
    {label: 'Hindi', value: 1 },
    {label: 'Deutsch', value: 2 },
    {label: 'Espanol', value: 3 },
    {label: 'Francais', value: 4 },
    {label: 'Indonesia', value: 5 },
    {label: 'Italino', value: 6 },
    {label: 'Portugues', value: 7 },
    {label: 'Russian', value: 8 },
    {label: 'Turkese', value: 9 },
    {label: 'Chinese', value: 10 },
  ];
    return (
      <View>
        <ScrollView>
        <RadioForm
          style={{marginTop: 20,marginLeft: 20}}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
        </ScrollView>
      </View>
    );
  }
}

export default Language;
