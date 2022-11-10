import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import MainNav from './MainNav';
import { UserContext } from "./MainNav"
import { useCart } from "react-use-cart";
import { Cookie } from '@mui/icons-material';

// import {Link} from 'react-router-dom';

const CardsPro = ({ product, onAddToCart}) => {

    // const counter = useContext (UserContext);

    // const [counter, setCounter] = useState(0)
    // const handleOnClick = (e) => {
    //     e.preventDefault();
    //     setCounter (counter+1)
    //     console.log(counter)
    //     localStorage.setItem('counterL', JSON.stringify(counter));
    //     console.log(localStorage)

    // }
        // const [cards, setcards] = useState([])

        
        // useEffect(() => {
        //   axios.get("Card.json")
        //   .then((res) => {
        //     setcards(res.data.cards)
        //   })
        // }, [])
  return (
    <div>
        {/* <div className='CardsProMainDiv container-fluid'>
        {cards.slice(0, 4).map((cards => 
        <Card key={cards.id} className='CardsProMainCard' style={{ width: '18rem' }}>
          <div className='CardimgDiv'>
      <Card.Img className='CardimgChild'  variant="top" src={cards.photo} /></div>
      <Card.Body>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text>
          {cards.price}
        </Card.Text>
        <Button onClick={() => callback(Math.floor +1 , handleOnClick(cards))}  variant="dark">Add to cart </Button>
      </Card.Body>
    </Card>
          ))}
</div> */}
   <div className='CardsProMainDiv container-fluid     ' >
        
        <Card key={product.id} className='CardsProMainCard ' style={{ width: '18rem' }}>
          <div className='CardimgDiv'>
      <Card.Img className='CardimgChild'  variant="top" src={product.image.url} /></div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
  
        <Card.Text>
          ${product.price.formatted}
        </Card.Text>
        <Button onClick={() => onAddToCart(product.id, 1)}  variant="dark">Add to cart </Button>
      </Card.Body>
    </Card>
   
          
</div>
  
    </div>
  )
}

export default CardsPro