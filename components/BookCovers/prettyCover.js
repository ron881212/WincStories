import React from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { withNavigation } from 'react-navigation'

class AlexBook extends React.Component {
    render(){
      return(
        <ScrollView horizontal={true}>
          <View style={{height:350}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pretty')}>
            <Image 
              source={{uri: 'https://monetthigpen.github.io/The/prettyCover.JPG'}}
              style={styles.narratedBooks}
              />
           </TouchableOpacity>
          </View>
        </ScrollView> 
      )
    }
}

const styles = StyleSheet.create({
    narratedBooks: {
      position: 'absolute',
      height: 140,
      width: 140,
      zIndex: 2,
      top: 30,
      left: 20,
      margin: 0
    }
    // figure out how to do boxShadow and borderRadius inline here
    // box-shadow: 3px 3px #94632b, 10px 10px #fff, 15px 15px #94632b;
    // border-radius: 0 5px 0 10px;
})

export default withNavigation(AlexBook)