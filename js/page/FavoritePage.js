import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritePage</Text>
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

export default FavoritePage;
