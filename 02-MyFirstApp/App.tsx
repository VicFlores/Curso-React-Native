import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {IconProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeworkScreen} from './src/presentation';

const Icon = (props: IconProps) => <Ionicons {...props} />;

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: Icon,
      }}>
      <SafeAreaView style={styles.container}>
        {/* <HelloWorldScreen name="Vic Flores" /> */}

        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
