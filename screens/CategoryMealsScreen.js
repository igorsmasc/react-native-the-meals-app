import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import { CATEGORIES } from '../data/data';
import DefaultText from '../components/DefaultText';

const EmptyMealsList = () => (
  <View style={styles.content}>
    <DefaultText>No meals found. maybe check your filters?</DefaultText>
  </View>
);

const CategoriyMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return (
    <MealList
      listData={displayedMeals}
      navigation={navigation}
      emptyList={EmptyMealsList}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriyMealsScreen;
