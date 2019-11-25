import React from 'react';
import SearchBoxWithData from './components/SearchBoxWithData';
import ProductCluster from './components/ProductCluster';
import { Container } from 'bloomer';
import { fetchFromMeli } from './store/actions/appAction';
import { connect } from 'react-redux';

class MeliReact extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 10 }}>
        <SearchBoxWithData 
          onSearchButtonClick={() => this.props.handleClick()}
        />
        {this.props.products.length > 0 &&
          <ProductCluster 
            products={this.props.products}
          />
        }
      </Container>
    )
  }
}

const MapStateToProps = state => ({
  products: state.app.products
});

const MapDispatchToProps = dispatch=> ({
  handleClick : ()=> dispatch(fetchFromMeli())
});

export default connect(MapStateToProps, MapDispatchToProps)(MeliReact)
