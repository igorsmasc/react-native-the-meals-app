import React, { useLayoutEffect } from 'react';

import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/data';

const CategoriyMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoriyMealsScreen;
