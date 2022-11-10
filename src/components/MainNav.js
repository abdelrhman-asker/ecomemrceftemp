import React , {useState, useContext} from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Input } from 'reactstrap';
import { BsSearch } from 'react-icons/bs';
import Canvas from "./Canvas"



const MainNav = ({ cart }) => {

  // const [counter , setCounter] = useState(0)
  // const handleOnClick = (e) => {
  //   // e.preventDefault();
  //   setCounter(counter +1)

  // }

  // const textFromStorage = JSON.parse(localStorage.getItem('counterL'));
// console.log(number)
  // const CardsCounter = JSON.parse(localStorage.getItem('CardsCounter'));
  // console.log ({cards})

  
  return (
<div >
 
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container fluid className="MainContNAvbar" style={{height:"8vh"}}>
        
        <Col xs={3} md={3}>
        <Col   className='LeftNavBarCol'>
            
             <DropdownButton className="DropDownBott DropDownBottHonCanv" id="dropdown-item-button"  title="English">
       <Dropdown.ItemText>English</Dropdown.ItemText>
       <Dropdown.Item as="button">العربية</Dropdown.Item>
     </DropdownButton>
     <input placeholder='Search...' type="search" />
           
            
             </Col>
        </Col>
        <Col  xs={4}  className="MainRowNAvbarColC animate__animated animate__rollIn ">
        <Link to="/"> <h2>
            
             stellar
           </h2></Link>
            </Col> 
            
       
        <Col className='CartIcoMainCol' xs={1} >
               <Link to="/Cart"> 
             <Badge badgeContent={cart.total_items} >
               < ShoppingCartIcon /> 
              </Badge><span  className='CartTextMainSpan'>Cart</span>
              </Link>
             </Col>
             <div    className='DropDownFixedStyling'>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ToMakeHundHei">
          <Col xs={2}  className="MainRowNAvbarColR">
             <a  href="http://localhost/database/login.php">SIGNIN</a>
             <a href="http://localhost/database/register.php">REGISTER</a>
            
            
             </Col>

           


          </Nav>
        </Navbar.Collapse>
        
        </div>
        <Canvas  />

      </Container>
      
    </Navbar>
    {/* tesstttststst */}
    {/* <button
        // onClick={handleOnClick}
        >add to cart (Test)</button> */}
    </div>


   
  )}

export default MainNav