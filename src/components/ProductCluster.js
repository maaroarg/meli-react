import React from 'react';
import ProductItem from './ProductItem';

class ProductCluster extends React.Component {

  render(){
    return (
      <div>
        {
          this.props.products.map(item =>
              <ProductItem
                title = {item.title}
                thumbnail = {item.thumbnail}
                link = {item.permalink}
                price = {item.price}
                condition = {item.condition}
              />
          )
        }
      </div>
    )
  }

}

export default ProductCluster;
