import React from 'react';
import {StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};
const renderScene = SceneMap({
  tab1: FirstRoute,
  tab2: SecondRoute,
});

const PopularPage = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'tab1', title: 'Tab1'},
    {key: 'tab2', title: 'Tab2'},
  ]);
  return (
    <TabView
      onIndexChange={setIndex}
      navigationState={{index, routes}}
      renderScene={renderScene}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default PopularPage;
