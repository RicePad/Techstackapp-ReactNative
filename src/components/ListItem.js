import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CardSection from './CardSection';
import { connect } from 'react-redux';

// extracts all actions functions from index file
import * as actions from '../actions';


class ListItem extends Component {
	render(){
		// console.log(this.props)
		return(
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(this.props.library.id)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{this.props.library.title}</Text>
						<Text style={styles.description}>{this.props.library.description}</Text>
					</CardSection>
					<CardSection>
						<Text style={styles.description}>{this.props.library.description}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
			)
	}
}






const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};


export default connect(null, actions )(ListItem);