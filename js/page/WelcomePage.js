import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomePage = ({navigation}) => {
  const goHome = React.useCallback(() => {
    navigation.navigate('HomeTab', {screen: 'Home'});
  }, [navigation]);
  React.useEffect(() => {
    setTimeout(goHome, 1000);

    return () => {
      clearTimeout(goHome);
    };
  }, [goHome]);
  return (
    <View style={styles.container}>
      <Text>this is Welcome Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomePage;
