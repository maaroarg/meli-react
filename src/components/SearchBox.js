import React from 'react';
import { Field, Control, Button, Input } from 'bloomer';

class SearchBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {query:''}
  }

  handleClick(){
    this.props.onSearchButtonClick();
  }

  handleChange(value){
    this.setState({
      query: value
    });
    this.props.setInputValue(value);
  }

  render(){
    return(
      <Field isGrouped>
        <Control>
          <Input
            type="text"
            placeholder="ex.chromecast..."
            value={this.state.query}
            onChange={event => this.handleChange(event.target.value)}
          />
        </Control>
        <Control>
          <Button
            isColor='success'
            isOutlined
            onClick={event => this.handleClick(event.target.value)}>
            Click para buscar en Meli!
          </Button>
        </Control>
      </Field>
    )
  }

}

export default SearchBox;
