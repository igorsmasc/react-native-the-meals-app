import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        item={item}
        onSelect={() => {
          navigation.navigate('Details', { id: item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  list: { width: '100%' },
});

export default MealList;
