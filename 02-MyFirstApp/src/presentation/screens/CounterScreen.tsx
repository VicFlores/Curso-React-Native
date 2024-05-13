import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* <PrimaryButton
        label="Incrementar"
        onPress={handleIncrement}
        onLongPress={handleReset}
      />

      <PrimaryButton
        label="Decrementar"
        onPress={handleDecrement}
        onLongPress={handleReset}
      /> */}

      <Button
        onPress={handleIncrement}
        onLongPress={handleReset}
        mode="contained">
        Incrementar
      </Button>

      <Button
        onPress={handleDecrement}
        onLongPress={handleReset}
        mode="contained">
        Decrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
