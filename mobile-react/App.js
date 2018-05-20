import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Timer from './Timer'
import LeaderBoard from './LeaderBoard'
import Footer from './footer';
import Badge from './badges';


class App extends React.Component {
  state = {
    go: null,
  }

  static navigationOptions = {
    headerStyle: {
      display: 'none',
    },
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View />
        <Button title='Disconnect' onPress={this.handleDisconnect}></Button>
        <Footer />
      </View>
    );
  }

  handleDisconnect = () => {
    this.props.navigation.navigate('Timer', {onConnect: this.handleConnect})
  }

  handleConnect = () => {
    this.props.navigation.navigate('Home')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9bda49',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default createStackNavigator({
  Home: App,
  Timer: Timer,
},
  {
    initialRouteName: 'Home',
  }
);
