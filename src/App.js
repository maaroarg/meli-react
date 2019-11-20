import React from 'react';
import SearchBox from './components/SearchBox';
import ProductCluster from './components/ProductCluster';
import { Container } from 'bloomer';

class MeliReact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      query: ''
    }
  }

  //Solo para pruebas
  componentDidMount(){
    this.setState({
      query:'xbox'
    });
    this.getProducts('ps4');
  }

  //Fetch a MELI
  getProducts(value=this.state.query){
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + value)
      .then((response)=>{
        if(response.status!==200){
          console.error("Problemas con la API. Status code:" + response.status);
          return false;
        }

        response.json().then(data=>{
            this.setState({products: data.results})
          })
    });
  }

  setQuery(value){
    this.setState({
      query: value
    });
  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 10 }}>
        <SearchBox setInputValue={(term) => this.setQuery(term)} onSearchButtonClick={() => this.getProducts()}/>
        <ProductCluster products={this.state.products}/>
      </Container>
    )
  }
}

export default MeliReact;

//Cambio para probar Fork en gitHub 
