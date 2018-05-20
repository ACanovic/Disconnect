import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableNativeFeedback } from 'react-native';

export default function Footer({toBadges, toBoard}) {
		return (
			<View style={styles.container}>
				<View style={{width: '50%', flex:1}}>

					<TouchableNativeFeedback
						onPress={toBadges}
					>
					<Image 
						style={{width: 75, height: 85, margin: 20}} 
						source={require('./images/basic_badge.png')} 
					/>
					</TouchableNativeFeedback>
				</View>
				<View>

				</View>
				
				<View style={{width: '50%', flex: 1}}>
					<TouchableNativeFeedback
						onPress={toBoard}
					>
					<Image 
					style={{width: 80, height: 90, margin: 20, alignSelf: 'flex-end'}} 
					source={require('./images/firstplace.png')} 
					/>
					</TouchableNativeFeedback>
				</View>
				
			</View>
		)
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
});