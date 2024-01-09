import React , {Component}from 'react';
import {Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";
import Logo from "../Assets/Mlogo.png";
import axios from 'axios';


class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }  
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }
}

export const Navbar = () => {
    
    return (
        <div className='Navbar'>
            <div className='links'>
                <Link to="/" className='logo'> <img src={Logo}/></Link>
                <Link to="/Cart" className='shoppingCart'> <ShoppingCart size={32}/> </Link>
                {/*<Link to="/login" className='Login'>Login</Link>*/}
            </div>
        </div>
    );
}

