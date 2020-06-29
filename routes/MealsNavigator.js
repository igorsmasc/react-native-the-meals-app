import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMeals from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: { fontFamily: 'open-sans-bold' },
  headerTintColor: 'white',
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={CategoriesMeals} />
      <Stack.Screen name="Details" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const MealsFavoriteNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Detail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const MealsTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      tabBarOptions={{
        activeTintColor: Colors.accent,
        labelStyle: { fontFamily: 'open-sans-bold' },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          iconName = route.name === 'Meals' ? 'ios-restaurant' : 'ios-star';

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={MealsFavoriteNavigator} />
    </Tab.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultStackNavOptions,
        ...{ title: 'Filter Meals' },
      }}
    >
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MealsFavs"
      drawerContentOptions={{
        activeTintColor: Colors.accent,
        labelStyle: { fontFamily: 'open-sans-bold' },
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        options={{ title: 'Meals' }}
        component={MealsTabNavigator}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
