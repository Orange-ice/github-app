import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PopularPage = () => {
  return (
    <View style={styles.container}>
      <Text>popular Page</Text>
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

export default PopularPage;
