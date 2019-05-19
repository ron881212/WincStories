import React from 'react';
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class MonetBook extends React.Component {
  render(){
    return(
      <ScrollView horizontal={true}>
        <View style={{height:650}}>
          <Image 
          source={{uri:'https://github.com/monetthigpen/The/blob/master/Bobbys_walk/IMG_27.jpg?raw=true'}}
          style={styles.adventureBooks}
          /> 
        </View>
      </ScrollView> 
    )
  }
}
class AlexBook extends React.Component {
  render(){
    return(
      <ScrollView horizontal={true}>
        <View style={{height:350}}>
          <Image 
            source={{uri: 'https://monetthigpen.github.io/The/prettyCover.JPG'}}
            style={styles.narratedBooks}
            />
        </View>
      </ScrollView>
    )
  }
}
class RonGames extends React.Component {
  render(){
    return(
      <ScrollView horizontal={true}>
        <View style={{height:350}}>
          <Image 
            source={{uri: 'https://monetthigpen.github.io/The/trashPickupCover.jpg'}}
            style={styles.game1}
            />
          <Image 
            source={{uri: 'https://cdn.europosters.eu/image/750/posters/my-little-pony-movie-friendship-is-forever-i49291.jpg'}}              style={styles.game2}
            /> 
        </View>
      </ScrollView>
    )
  }
}

export default class Library extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      return (
        <View>
        {/* Books shelves need to be their own components to allow ScrollView horizontal for each shelve also TouchableOpacity */}
        {/* <ScrollView horizontal={true}> */}
        <ImageBackground source={{uri:'https://cdn.clipart.email/8d7022740a6b5a7950c0ebcf708c4e2f_royalty-free-empty-bookcase-clip-art-vector-images-_478-612.jpeg'}} style={{width: '100%', height: '100%'}}>

        {/* This below will be a map function that passes in all the Choose Your Own Adventure Books. Later look into allowing users to add books through a store allowing merchents to sale or added thier own books or lesson plans. The style have to be rewritten so that all the books on this shelve line up on this shelve evenly. */}   
        
          <MonetBook />
  
        {/* This below will be a map function that passes in all the Narrated Books. */}
          
          <AlexBook />

        {/* This will be our games.  Later look into allowing others to add their games and interactive content.  We need to diversify the way we expand by allows users to help */}

          <RonGames />

        </ImageBackground>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  case: {
    zIndex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
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
  },
  narratedBooks: {
    position: 'absolute',
    height: 140,
    width: 140,
    zIndex: 2,
    top: 30,
    left: 20
  },
  game1: {
    position: 'absolute',
    height: 140,
    width: 140,
    zIndex: 2,
    top: 15,
    left: 20,
  },
  game2: {
    position: 'absolute',
    height: 140,
    width: 140,
    zIndex: 2,
    // top: 550,
    top: 15,
    left: 190,
  }
});
