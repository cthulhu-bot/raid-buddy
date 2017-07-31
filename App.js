import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
	    <View style={styles.container}>
	    <View style={{width: 50, height: 50, backgroundColor: 'powderblue' }} />
	    <View style={{width: 100, height: 100, backgroundColor: 'skyblue' }} />
	    <View style={{width: 150, height: 150, backgroundColor: 'steelblue' }} />
        <Text>Welcome to Raid Buddy</Text>
            <Text>Your one stop shop for Pokemon Go raiding</Text>
	    <Text>And stuff just works</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
