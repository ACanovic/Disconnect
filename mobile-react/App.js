import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Amplify from 'aws-amplify';
//import aws_exports from './aws-exports';
import Timer from './Timer'
import LeaderBoard from './LeaderBoard'


export default class App extends React.Component {
  state = {
    go: null,
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.go ? <Timer onConnect={this.handleConnect}/>
        : <Button title='Disconnect' onPress={this.handleDisconnect}></Button> }
        <LeaderBoard/>
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
    backgroundColor: '#f1ea40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Amplify.configure(aws_exports);