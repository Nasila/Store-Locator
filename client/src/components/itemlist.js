import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
export default class itemlist extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            email: this.props.location.data
        };
        
        
    }
    componentDidMount() {
        const email = this.state.email;
        axios.get(`http://localhost:5000/itemlist/get-cart/${email}`
        ).then(res=>this.setState({ items: res.data }));
    }
    render() {

        console.log(this.state.items);
        return (
            <div>
                <div className="card">
                        <div className="card-body">
                                <p>{this.state.email}</p>
                                {this.state.items.map(item=>(
                                    <ListGroupItem key={item._id} className="list-group">
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                
                                  </ListGroupItem>
                                ))}
                        </div>
                </div>
            </div>
        )
    }
}