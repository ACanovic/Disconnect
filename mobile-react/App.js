import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Timer from './Timer'
import LeaderBoard from './LeaderBoard'
import Footer from './footer';
import Badges from './badges';


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
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View />
        <Button title='Disconnect' onPress={this.handleDisconnect}></Button>
        <Footer toBadges={() => navigate('Badges')} toBoard={() => navigate('Board')}/>
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
  Badges: Badges,
  Board: LeaderBoard,
},
  {
    initialRouteName: 'Home',
  }
);
