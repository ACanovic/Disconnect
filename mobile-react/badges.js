import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Baddge() {
	
	return (
		<View >
			<View style={{alignItems: 'center'}}>
				<Text style={styles.titleTextStyle}>BADGES</Text>
			</View>
			<View style={{flex: 2, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
				<Image style={{width: 80, height: 90, margin: 20}} source={require('./images/basic_badge.png')} />
				<Image style={{width: 80, height: 90, margin: 20}} source={require('./images/1star.png')} />
				<Image style={{width: 80, height: 90, margin: 20}} source={require('./images/2star.png')} />
				<Image style={{width: 80, height: 90, margin: 20}} source={require('./images/2star.png')} />
			</View>
	    </View>
	);
	
}

const styles = StyleSheet.create({
	titleTextStyle: {
		color: '#cff88f',
		fontWeight: 'bold',
		fontSize: 40,
	}
})