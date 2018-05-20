import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function Footer() {

	

	
	return (
		<View style={styles.container}>
			<View style={{width: '50%', flex:1}}>

				<Image 
				style={{width: 75, height: 85, margin: 20}} 
				source={require('./images/basic_badge.png')} 
				/>
			</View>
			<View>

			</View>
	        
	        <View style={{width: '50%', flex: 1}}>
	        	<Image 
				style={{width: 80, height: 90, margin: 20, alignSelf: 'flex-end'}} 
				source={require('./images/firstplace.png')} 
				/>
	        </View>
	        
	    </View>
	);
	
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
