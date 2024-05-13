import React from 'react';
import {HomeScreen, ProfileScreen, SettingsScreen} from '../screens';
import {Ionicons} from '../components';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorStyles}>
      <Tab.Screen
        options={tabScreenStyle('Home', 'home-outline')}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={tabScreenStyle('Profile', 'person-outline')}
        name="Profile"
        component={ProfileScreen}
      />

      <Tab.Screen
        options={tabScreenStyle('Settings', 'settings-outline')}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

const tabNavigatorStyles: BottomTabNavigationOptions = {
  // headerShown: false,

  tabBarStyle: {
    height: 70,
  },

  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  tabBarActiveTintColor: '#e2603f',
  headerTintColor: '#e2603f',
};

const tabScreenStyle = (
  title: string,
  iconName: string,
): BottomTabNavigationOptions => {
  return {
    title,
    tabBarIcon: ({color}) => <Ionicons name={iconName} color={color} />,
  };
};
