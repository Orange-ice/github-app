import React from 'react';
import PopularPage from './PopularPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/*<Tab.Screen name="Home" component={HomePage} />*/}
      <Tab.Screen
        name="Popular"
        component={PopularPage}
        options={{
          title: '最热',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="whatshot" size={26} style={{color}} />
          ),
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingPage}
        options={{
          title: '趋势',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="trending-up" size={26} style={{color}} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          title: '收藏',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={26} style={{color}} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          title: '我的',
          tabBarIcon: ({color}) => (
            <Entypo name="user" size={26} style={{color}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
