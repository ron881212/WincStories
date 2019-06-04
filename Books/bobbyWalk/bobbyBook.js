import React, { Component } from 'react'
import { 
View, 
Text, 
Image, 
TouchableOpacity, 
StyleSheet,
SafeAreaView
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Card } from 'react-native-elements'
import Pages from './bobbysWalkStart.json'

export default class BobbyWalk extends Component {
    constructor(props){
        super(props)
        this.state = {
            pages: Pages,
          }
    }
    static navigationOptions = {
        title: 'Bobbys Walk',
    }
    _renderItem({ item, index }){
        return(
            <View style={{flex:1,justifyContent: 'space-evenly'}}>
                <Image source={{ uri: item.imageLink }}
                style={{ height: 350}} /> 
                <Text style={styles.bobbyText}>{item.text}</Text>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.bobbyPage}>{`page: ${item.id}`}</Text>
                </View>
            </View>
        )
    }
    render () {

        return (
            <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Carousel
                  ref = {ref => this.carousel = ref}
                  data = {this.state.pages}
                  sliderWidth = {350}
                  itemWidth = {350}
                  renderItem = {this._renderItem}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    bobbyText: {
    // color: rgb(51, 67, 214),
    fontFamily: 'Cochin',
    fontSize: 20
    },
    bobbyPage: {
    fontFamily: 'Cochin',
    fontSize: 20
    }
})