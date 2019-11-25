import React from 'react';
import SearchBox from "./SearchBox";
import { setQuery } from "../store/actions/appAction";

//Connect para conectar el componente al store. 
import { connect } from 'react-redux';

const SearchBoxWithData = (props)=>(
		<SearchBox
      setInputValue={(q) => props.handleQuery(q)}
      onSearchButtonClick={() => props.onSearchButtonClick()}
      value={props.query}
      placeholder={props.placeholder}
      fetching={props.fetching}
    />
);

const mapDispatchToProps = dispatch => {
  return {
    handleQuery: (q) => dispatch(setQuery(q))
  }
}

const mapStateToProps = (state) => {
	return({
		query : state.app.query,
    fetching: state.app.isFetching,
    placeholder: state.app.placeholder
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxWithData);