import React, {useContext} from 'react'
import MainNav from './MainNav'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({cart , onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
  const handleEmptyCart = () => onEmptyCart();


  const EmptyCart = () => (
    <div className="cartxy">
      <p>Your cart is currently empty.</p>
      <Link to="/" >
        <button className="bttncarttt">Back to Home</button></Link>
    </div>
  );


  const FilledCart = () => (
    <>
      {cart.line_items.map((lineItem) => (
        <tr key={lineItem.id} className="divcarttttt">
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
        </tr>
      ))
      }
    </>
  );
  // const cards = JSON.parse(localStorage.getItem('CardsCounter'));
  return (
    <>
        {/* <MainNav /> */}
        <div>
      <div className="carttt">
        <h3 className="h3cart">Shopping Cart</h3>
        {cart.total_items  ?
        (<div className="fff">
          <div className="tblewidth">
            <table className="tbleee">
              <thead>
                <tr>
                  <th><p>PRODUCT DETAILS</p></th>
                  <th><p>UNIT PRICE	</p></th>
                  <th><p>QUANTITY</p></th>
                  <th><p>AMOUNT</p></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <FilledCart />
              </tbody>
            </table>

            <button onClick={handleEmptyCart}  className="bttncarttt mt-5">Empty Cart</button>
          </div>
        </div>):
        <EmptyCart />}
      </div>
      {/* <Footer /> */}
    </div>
{/* {cards.price}
{cards.title}
<img width="300px" height="300px" src={cards.photo} /> */}
    </>
  )
}

export default Cart