// import React from 'react';
// import { Platform } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
 
// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import LibraryScreen from '../screens/LibraryScreen';
// import AboutUsScreen from '../screens/AboutUsScreen';

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
// });

// const LibraryStack = createStackNavigator({
//     Library: LibraryScreen,
// });

// const AboutStack = createStackNavigator({
//     About: AboutUsScreen,
// });

// export default createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Library: LibraryStack,
//     About: AboutStack
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           // Sometimes we want to add badges to some icons. 
//           // You can check the implementation below.
//           IconComponent = HomeIconWithBadge; 
//         } else if (routeName === 'Library') {
//           iconName = `ios-options`;
//         } else if (routeName === 'About') {
//           iconName = `ios-options`;
//         }
        
//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   },
// )