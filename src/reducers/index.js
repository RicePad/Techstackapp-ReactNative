import { combineReducers } from 'redux';
import LibraryList from './library_list_reducer';
import SelectionReducer from './selection_reducer';



export default combineReducers({
	libraries: LibraryList,
	selectedLibraryId: SelectionReducer
})