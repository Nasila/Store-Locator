import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class card extends Component {
   
    handleClick = () => {
    
        axios.post("http://localhost:5000/itemlist/update-cart",{
            name:this.props.name,
            id:this.props.id,
            price:this.props.price,
            description:this.props.description,
            quantity:this.props.quantity,
            uid: this.props.uid
        }).then(item => {
            document.getElementById("btn").innerHTML = "Added";
        })
        .catch("ERROR");
       
    }
    render() {
        return (
            <div className="p-2 bd-highlight col-example">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width:"100%",height: '15vw',objectFit: 'cover'}} src="https://media.gq.com/photos/5f316a12092046da7abdb421/master/w_2000,h_1333,c_limit/COS-regular-fit-recycled-cotton-jeans.jpg" />
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                   Price: {this.props.price}
                </Card.Text>
                <Card.Text>
                {this.props.description}
                </Card.Text>
                <Button id="#btn" variant="primary" onClick={this.handleClick}>Add to cart</Button>
                </Card.Body>
                </Card>
            </div>
        );
    }
}
