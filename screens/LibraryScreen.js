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
import MonetBook from '../components/BookCovers/bobbyCover'
import AlexBook from '../components/BookCovers/prettyCover'


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
