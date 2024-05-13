import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#5856D6',
  secondary: '#FF9427',
  tertiary: '#2BC48A',
  success: '#198754',
  warning: '#F4A261',
  danger: '#D62828',
  dark: '#000',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },

  title: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
    color: globalColors.dark,
  },

  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
