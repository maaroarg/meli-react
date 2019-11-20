import React from 'react';
import { Columns, Column, Button } from 'bloomer';

class ProductItem extends React.Component {

  render(){

    return(
      <Columns isCentered>
        <Column isSize="narrow">
          <img src={this.props.thumbnail} alt={this.props.id} />
        </Column>
        <Column>
          <div>{this.props.title}</div>
          <div><strong>ARS {this.props.price}</strong> ({this.props.condition})</div>
        </Column>
        <Column isSize="1/2">
          <Button href={this.props.link}>Detalles!</Button>
        </Column>
      </Columns>
    )
  }

}

export default ProductItem;
