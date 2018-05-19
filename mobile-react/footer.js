import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function Footer() {
	
	

	
	return (
		<View style={styles.container}>
			<View style={{width: '50%', flex:1}}>
				<Button
				  title="baddges"
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>
			</View>
	        
	        <View style={{width: '50%', flex: 1}}>
	        	<Button
				  title="Leader"
				  color="green"
				  accessibilityLabel="Learn more about this purple button"
				/>
	        	
	        </View>
	        
	    </View>
	);
	
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
