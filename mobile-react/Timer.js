import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Footer from './footer';


export default class Timer extends React.Component {

    state = {
        totalSeconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
    }

    static navigationOptions = {
        headerStyle: {
          display: 'none',
        },
    }

    componentDidMount(){
        this.interval = setInterval(this.increment, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.interval)
    }

    increment = () => {
        this.setState(prevState => {
            const totalSeconds =  prevState.totalSeconds+1
            const newMinute = prevState.seconds + 1 === 60
            const minIncrement = newMinute ? 1 : 0
            const newHour = prevState.minutes + 1 === 60
            const hourIncrement = newHour ? 1 : 0
            const seconds = newMinute ? 0 : prevState.seconds+1
            const minutes = newHour ? 0 : prevState.minutes + minIncrement

            return { 
                    totalSeconds,
                    seconds, 
                    minutes,
                    hours: prevState.hours + hourIncrement,
                }
        })
    }

    render() {
        const {seconds, minutes, hours} = this.state
        return (
            <View style={styles.container}>
            <Text style={styles.timer}>
                {hours > 0 && (<Text>{hours}:</Text>)}
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
            <Button onPress={this.props.navigation.getParam('onConnect')} title='Connect'/>
            <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9bda49',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    timer: {
      fontSize: 90,
      color: '#5752f1',
    },
});