import React from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { withNavigation } from 'react-navigation'

class MonetBook extends React.Component {
  constructor(props) {
    super(props) 
  }
    render(){
      return(
        <ScrollView horizontal={true}>
          <View style={{height:650}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Bobby')}>
            <Image 
            source={{uri:'https://github.com/monetthigpen/The/blob/master/Bobbys_walk/IMG_27.jpg?raw=true'}}
            style={styles.adventureBooks}
            /> 
          </TouchableOpacity>
          </View>
        </ScrollView> 
      )
    }
}

const styles = StyleSheet.create({
    adventureBooks: {
      position: 'absolute',
      height: 140,
      width: 140,
      zIndex: 2,
      top: 210,
      left: 20
      // figure out how to do boxShadow and borderRadius inline here
      // box-shadow: 3px 3px #94632b, 10px 10px #fff, 15px 15px #94632b;
      // border-radius: 0 5px 0 10px;
    }
})

export default withNavigation(MonetBook)