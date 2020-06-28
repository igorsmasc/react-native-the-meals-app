import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/data';

const MealDetailScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [navigation, selectedMeal.title]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
