import React, { useState } from 'react'
import { useEffect } from 'react'
import { ScaleLoader } from 'react-spinners'
import { Col, Container, Row } from 'reactstrap'

import CardsPro from './CardsPro'
import MainNav from "./MainNav"
import Swiper from "./Swiper/Swiper"
import WOW from 'wowjs';

const Home = ({products, onAddToCart, totalItems, cart}) => {
  // new WOW.WOW().init();

  
  new WOW.WOW({
    live: false
  }).init();




  const [number, setNumbere] = React.useState(0)
        localStorage.setItem('counterL', JSON.stringify(number));


  // const {photo,title, price} = cards;
  // const [cards , setCards] = React.useState(0)
  // const handleOnClick = (cards) => {
  //   localStorage.setItem('CardsCounter', JSON.stringify(cards));
  //   console.log (cards)
  // }

  const [loading , setLoading] = useState(false);
  useEffect(() =>{
          setLoading(true)
          // new WOW.WOW().init();

          setTimeout(() =>{
              setLoading(false)
  
          } , 2000)
  
      },[])
  return (
    <>
     {/* <MainNav totalItems={totalItems}  number={number} className="NavHeightOnHome"  />   */}
     <Swiper className="SwiperHeightOnHome" /> 
     {
      loading == true? <ScaleLoader style={{display:"flex", justifyContent:"center", alignItems:"center", height:"300px"} } color="#36d7b7" /> :
      <Container >
      <Row>
{products.map((product) => (
    
        <Col  md="4" sm="12" className='m-auto animate__backInDown wow' data-wow-duration="1.5s"  data-wow-iteration="1"   key={product.id}>
      <CardsPro onAddToCart={onAddToCart} product={product}  cart={cart}   />
      </Col>
  ))}
  
      </Row>
    </Container>

     }
    
    </>
  )
}

export default Home