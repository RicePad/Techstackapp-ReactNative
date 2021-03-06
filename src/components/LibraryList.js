import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
	componentWillMount(){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}


	renderRow(library){
		return(
				<View>
					<ListItem
						library = {library}
					 />
				</View>
			)
	}

	render(){
		console.log('this.props.libraries', this.props.libraries)
		return(
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			 />
			)
	}
}

function mapStateToProps(state){
	return { 
		libraries: state.libraries 
	} 
}

export default connect(mapStateToProps)(LibraryList);