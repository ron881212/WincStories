import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Troy from '../images/troy_youth.jpg'
import Monet from '../images/monet_youth.jpg'
import Alex from '../images/alex_youth.jpg'
import Ron from '../images/ronald_youth.jpg'

export default class AboutUs extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
      const users = [
        {
          avatar: Troy,
          name: 'Troy Wynn',
          job: 'Back-End Engineer'
        },
        {
          avatar: Monet,
          name: 'Monet Thigpen',
          job: 'Front-End Developer, UI Designer & Author'
        },
        {
          avatar: Alex,
          name: 'Alex Kluger',
          job: 'Project Manager & Author'
        },
        {
          avatar: Ron,
          name: 'Ronald Glover',
          job: 'React Developer'
        },
      ]
      return (
        <ScrollView style={styles.background}>   
          <Text style={styles.story}>
          Our Story: 
          Problem: Our home city of Philadelphia has an epidemic of litter on the streets.  Faced with this dismal situation, we set out to have an impact that could raise awareness of the problem, engage the community to work towards a solution, and set our trajectory towards a cleaner future. 
          Solution: This project began as a simple children's book idea that would send a positive message and encourage kids to avoid littering and pick up trash as they encounter it in the city.  With the power of digital storytelling and our abilities as web developers, the team expanded on this notion to produce a variety of books and games that could impact a diverse audience.  In addition, we have included resources for educators to provide feedback as we continue to build, and have built a framework for teachers to eventually track students' progress and learn more about opportunities to engage in cleanup efforts local to their schools.
          Thank you for taking the time to explore Winc-Stories, we hope it leaves you feeling optimistic about the future and more engaged with your community's efforts to prevent the trashing of our environment.
          </Text>
          {
            users.map((u, i) => {
              return (
                <View key={i} >
                 <Card>
                  <Image
                    style={styles.image}
                    source={ u.avatar }
                  />
                  <Text >{u.name}</Text>
                  <Text >{u.job}</Text>
                  </Card>
                </View>
              );
            })
          }           
        </ScrollView>
      )
    }
}
const styles = StyleSheet.create({
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
  },
  story: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    marginTop: 50
  },
  job: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
  },
  background: {
    flex: 1,
    backgroundColor: '#8fe2ea'
  }
});