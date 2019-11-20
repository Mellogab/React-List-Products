import React, {Component} from 'react'
import axios from 'axios';
import './styles.css'

export default class Product extends Component {
    state = {
        product: [],
    };

    //método que faz algo assim que o component é exibido na tela
    async componentDidMount(){
        const { id } = this.props.match.params;
        
        const response = await axios.get(`https://rocketseat-node.herokuapp.com/api/products/${id}`, null);
        
        this.setState({product: response.data});
    }

    render(){
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        )
    }
}