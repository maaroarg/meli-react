import React from 'react';
import { Field, Control, Button, Input } from 'bloomer';

class SearchBox extends React.Component {

  handleClick(){
    this.props.onSearchButtonClick();
  }

  handleChange(value){
    this.props.setInputValue(value);
  }

  render(){
    console.log("PROPS", this.props);
    return(
      <Field isGrouped>
        <Control>
          <Input
            type="text"
            placeholder={this.props.placeholder||""}
            value={this.props.query}
            onChange={event => this.handleChange(event.target.value)}
          />
        </Control>
        <Control>
          <Button
            isLoading={this.props.fetching||false}
            onClick={event => this.handleClick(event.target.value)}
            isColor='info'
          >
            Buscar en Meli
          </Button>
        </Control>
      </Field>
    )
  }

}

export default SearchBox;
