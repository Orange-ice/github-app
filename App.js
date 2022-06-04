import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './js/page/HomePage';
import WelcomePage from './js/page/WelcomePage';
import MyPage from './js/page/MyPage';
import PopularPage from './js/page/PopularPage';
import TrendingPage from './js/page/TrendingPage';
import FavoritePage from './js/page/FavoritePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTab" component={TabNavigation} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
