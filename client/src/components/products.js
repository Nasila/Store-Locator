import React, { Component } from 'react'
import axios from 'axios';
import Card from './card';
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []};
    }
   
    openlist = () => {
        this.props.history.push({
            pathname: '/item-list',
            data: this.props.location.data
          });
    }
    componentDidMount() {
        axios.get("http://localhost:5000/itemlist/products",{
            headers: { 'Content-Type' : 'application/json'}}).
        then(res=>{
            this.setState({ products: res.data.item });
            
        }
        ).catch(err=> console.log("error",err));
    }
    render() {
       
        console.log("email",this.props.location.data);
        return (
            <>
            <h1>Welcome User {this.props.location.data} <button type="button" disabled={this.state.products.length>0 ? false: true} onClick={this.openlist}className="btn btn-primary">Checklist</button></h1>
            <div className="d-flex align-content-start flex-wrap bd-highlight example-parent">
                {this.state.products.map((product) => (
                    <Card uid={this.props.location.data} key={product.id} name={product.name} price={product.price} description={product.description} quantity={product.quantity}/>
                
                ))}
                </div>
                </>
        )
    }
}
