import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomePage = ({navigation}) => {
  const goHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);
  React.useEffect(() => {
    setTimeout(goHome, 1000);

    return () => {
      clearTimeout(goHome);
    };
  }, [goHome]);
  return (
    <View>
      <Text>this is Welcome Page</Text>
    </View>
  );
};
export default WelcomePage;
