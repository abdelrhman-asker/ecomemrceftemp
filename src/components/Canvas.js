import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {CgFormatJustify} from "react-icons/cg"
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Navbar from 'react-bootstrap/Navbar';
import {  Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Canvas = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="CanvasStylingOnNAv LeftNavBarCol">
      <Button variant="transparent "  onClick={handleShow}>
      <CgFormatJustify size={40}/>
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="ms-auto ToMakeHundHei">
        <Col className="MainRowNAvbarColR">
             <Link >SIGNIN</Link>
             <Link >REGISTER</Link>
             
             <DropdownButton className="DropDownBott" id="dropdown-item-button"  title="العربية">
       <Dropdown.ItemText>العربية</Dropdown.ItemText>
       <Dropdown.Item as="button">English</Dropdown.Item>
     </DropdownButton>
            
             </Col>

            

        


          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Canvas