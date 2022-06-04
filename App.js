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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {/*<Tab.Screen name="Home" component={HomePage} />*/}
      <Tab.Screen
        name="Popular"
        component={PopularPage}
        options={{title: '最热'}}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingPage}
        options={{title: '趋势'}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{title: '收藏'}}
      />
      <Tab.Screen name="My" component={MyPage} options={{title: '我的'}} />
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
