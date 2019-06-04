import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import { Badge } from 'react-native-elements'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      header: 'Home',
    };
  
    render() {
      return (
        <SafeAreaView style={{flex: 1,backgroundColor: '#8fe2ea'}}>
            <Image 
                source={require('../images/educator.jpg')}
                style={{height: 250, width: '100%'}}
            />
            <Text style={styles.container}>Welcome we're Winc-Stories, a team of developers providing resources for parents and educators to encourage youth to keep their cities clean.  Kids can visit our library to discover a book or game.  Educators can sign up Here</Text>
        </SafeAreaView>
      )
    } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
  }
});
