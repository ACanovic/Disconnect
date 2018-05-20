import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import Timer from './Timer'
import LeaderBoard from './LeaderBoard'
import Footer from './footer';
import Badge from './badges';


export default class App extends React.Component {
  state = {
    go: null,
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View />
        {this.state.go ? <Timer onConnect={this.handleConnect}/>
        : <Button title='Disconnect' onPress={this.handleDisconnect}></Button> }
        <Footer />
      </View>
    );
  }

  handleDisconnect = () => {
    this.setState({go: true})
  }

  handleConnect = () => {
    this.setState({go: false})
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

//Amplify.configure(aws_exports);