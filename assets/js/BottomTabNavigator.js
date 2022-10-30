import React,{Component} from 'react';

import { NavigationContainer} from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Blog from '../screens/Blog';
import Emotional from '../screens/Emotional';
import Home from '../screens/Home'
import Login from '../screens/Login'
import Meditation from '../screens/Meiditation'
const Tab= createMaterialTopTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
      name='Login' component= {Login}
      />
      <Tab.Screen
      name="Home" component={Home}
      />
      <Tab.Screen
      name='Emotional' component={Emotional}
      />
      <Tab.Screen
      name='Blog' component={Blog}
      />
      <Tab.Screen
      name='Meditation' component={Meditation}
      />
      </Tab.Navigator>
      </NavigationContainer>
    )
  }
  
}