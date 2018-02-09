import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';


class LibraryList extends Component {
	render(){
		console.log('this.props.libraries', this.props.libraries)
		return(
			<View>
				<Text>LibraryList</Text>
			</View>
			)
	}
}

function mapStateToProps(state){
	return { 
		libraries: state.libraries 
	} 
}

export default connect(mapStateToProps)(LibraryList);