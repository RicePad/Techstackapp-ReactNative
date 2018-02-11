import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import CardSection from './CardSection';


class ListItem extends Component {
	render(){
		return(
			<CardSection>
				<Text style={styles.titleStyle}>{this.props.library.title}</Text>
				<Text style={styles.description}>{this.props.library.description}</Text>
			</CardSection>
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


export default ListItem;