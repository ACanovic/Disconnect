import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class LeaderBoard extends React.Component {
	
	static navigationOptions = {
		headerStyle: {
		  display: 'none',
		},
	  }

    render() {
        return (
        	<View style={styles.container}>
	            <Text style={styles.textStyle}>LEADERBOARD</Text>
	            <Text style={styles.textStyle}>YOU: 133/255</Text>
	            <FlatList
		          	data={[
					{rank: (<Image 
						style={{width: 80, height: 90, margin: 20, alignSelf: 'flex-end'}} 
						source={require('./images/firstplace.png')} 
					/>), 
						key: 'Devin'
					},
		            {rank: 2, key: 'Jackson'},
		            {rank: 3, key: 'James'},
		            {rank: 4, key: 'Joel'},
		            {rank: 5, key: 'John'},
		          ]}
		          renderItem={({item}) => <Text key={item.key} style={styles.textStyle} >{item.rank}  {item.key}</Text>}
	        	/>
        	</View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: '#9bda49',
		alignItems: 'center',
		justifyContent: 'space-between',
	  },
	textStyle: {
		color: '#cff88f',
		fontWeight: 'bold',
		fontSize: 30,
	}
})