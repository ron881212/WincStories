import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View>
            <Image 
                source={require('../images/educator.jpg')}
                style={{height: 100}}
            />
        </View>
      )
    }
}
