import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { CATEGORIES } from '../data/data';

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

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoriyMealsScreen;
