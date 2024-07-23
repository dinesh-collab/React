import React from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';
import useCustomStatusBar from './src/useCustomStatusBar';

const App = () => {
  const [statusBarColor, setStatusBarColor] = useCustomStatusBar();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Custom Status Bar Hook</Text>
        <Button
          title="Change Status Bar Color to Blue"
          onPress={() => setStatusBarColor('#0000FF')}
        />
        <Button
          title="Change Status Bar Color to Red"
          onPress={() => setStatusBarColor('#FF0000')}
        />
        <Button
          title="Reset Status Bar Color"
          onPress={() => setStatusBarColor(null)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
