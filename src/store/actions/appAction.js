import store from "../index";

////////////// Helpers
const getProducts = (value) =>
	fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + value)
	.then(response => response.json())
	.then(data => data.results);

//Action types
export const SET_QUERY = 'SET_QUERY';
export const FETCHED_DATA = 'FETCHED_DATA';
export const IS_FETCHING = 'IS_FETCHING';

//Actions Creators
export function setQuery(q) {
  return { type: SET_QUERY, payload: q }
}

export function fetchedData(data) {
  return { type: FETCHED_DATA, payload: data }
}

export function isFetching(value) {
  return { type: IS_FETCHING, payload: value }
}

//Thunk Async
export function fetchFromMeli(){
	store.dispatch(isFetching(true));
	
	return async function(dispatch, getState){
		try{
			const value = getState().app.query;
			const data = await getProducts(value);
			dispatch(isFetching(false));
			return dispatch(fetchedData(data));
		}catch(err){
			dispatch(isFetching(false));
			//return dispatch(showError(err));
		}
	}
}