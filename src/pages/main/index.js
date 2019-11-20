import React, {Component} from 'react';
//import api from '../../services/api'
import {Link} from 'react-router-dom'

import axios from 'axios';
import './styles.css';

class Main extends Component {
    //Variaveis devem ser armazenadas sempre dentro do state
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    
    //Executar algo sempre que o component for exibido na tela
    componentDidMount(){
        this.loadProducts();
    }
    
    loadProducts = async (page=1) => {
        

        
        const response = await axios.get(`https://rocketseat-node.herokuapp.com/api/products?page=${page}`, null);
        const {docs, ...productInfo} = response.data;

        this.setState({products: docs, productInfo, page});

    };

    nextPage = () => {
        const { page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    }

    prevPage = () => {
        const { page, productInfo} = this.state;

        if(page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    render() {
        const { products,page, productInfo} = this.state;

        //return <h1>Contagem dos produtos: {this.state.products.length}</h1>
        return (
            <div className="product-list">
                {products.map((row) => {
                    return (
                        <article key={row._id}>
                            <strong>{row.title}</strong>
                            <p>{row.description}</p>

                            <Link to={`/products/${row._id}`}>Acessar</Link>
                        </article>
                    ) 
                })}
                <div className="actions">
                    <button disabled={page ===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}

export default Main;