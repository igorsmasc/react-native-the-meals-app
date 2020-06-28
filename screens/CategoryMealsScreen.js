import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/data';

const CategoriyMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
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

export default CategoriyMealsScreen;
