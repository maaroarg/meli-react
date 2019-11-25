const initialState = {
	query:"Ex. Ps4",
	products:[],
	isFetching: false,
	placeholder: "Ex. PS4"
}

export default (state=initialState, action) =>{
  switch(action.type){
    case 'SET_QUERY':
		return {
			...state,
			query: action.payload
		}
  	case 'FETCHED_DATA':
		return {
			...state,
			products: action.payload	
		}
	case 'IS_FETCHING':
		return {
			...state,
			isFetching: action.payload	
		}
    default:
      return state;
  }
};