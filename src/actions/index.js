export const FETCH_STACKS = 'FETCH_STACKS';
export const SELECT_LIBRARY = 'SELECT_LIBRARY';

export function fetchStacks(){
	const action = {
		type: FETCH_STACKS,
		payload: data
	}

	return action;
}


export function selectLibrary(id){
	const action = {
		type: SELECT_LIBRARY,
		payload: id
	}

	return action;
}


