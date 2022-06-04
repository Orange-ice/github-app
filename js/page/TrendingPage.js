import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TrendingPage = () => {
  return (
    <View style={styles.container}>
      <Text>TrendingPage</Text>
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

export default TrendingPage;
