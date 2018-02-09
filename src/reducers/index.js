import { combineReducers } from 'redux';
import LibraryList from './library_list_reducer';



export default combineReducers({
	libraries: LibraryList
})