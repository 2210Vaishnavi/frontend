
import { FaLinkedin, FaFacebookF, FaInstagramSquare, FaTelegram, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import '../component/style.css';
import larg from '../component/Images/large.jpg';
const Footer1 = () => {
    return (
        <>
            <footer>
                <Container className='mt-5'>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <h5>EZZ-Browise</h5>
                            <ul className="list-unstyled">
                                <li><a href="/home">All movies </a></li>
                                <li><a href="/home">Hindi movies</a></li>
                                <li><a href="/home">Marathi movies</a></li>
                                <li><a href="/home">English movies</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h5>EZZ-LINKS</h5>
                            <ul className="list-unstyled">
                                <li><a href="/signup">signup</a></li>
                                <li><a href="/login">login</a></li>
                                <li><a href="/">My bookings</a></li>
                                <li><a href="/">Account settings</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h5>EZZ-SUPPORT</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">About Ezz </a></li>
                                <li><a href="/">Ezz contact</a></li>
                                <li><a href="/">Feedback</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>
                        </Col>                      
                        <Col xs={12} sm={6} md={3}>
                           <h5>Ezz-Ticket</h5>
                            <ul className="list-unstyled">
                               <li><img
                                width={200} height={100}
                                src={larg}
                            /></li>
                           <br></br>
                                <li>E-mail: EzziTicket17gmail.com</li>
                                <li>Office: Cdac-acts, Panchavati, pashan, pune</li>
                                <li>Contact: 8459360487</li>
                            </ul>
                        </Col>
                    </Row>
                    <t>-----------------------------------------------------------------------------------------------Ezzi-ticket-------------------------------------------------------------------------------------</t><br/><br/>
                    <Row mt-2><Col xs={12}>
                        <ul className="list-unstyled d-flex justify-content-center social-icons">
                            <li><FaLinkedin />&nbsp;&nbsp;&nbsp;</li>
                            <li><FaFacebookF />&nbsp;&nbsp;&nbsp;</li>
                            <li><FaInstagramSquare />&nbsp;&nbsp;&nbsp; </li>
                            <li><FaTwitter />&nbsp;&nbsp;&nbsp;</li>
                            <li><FaTelegram />&nbsp;&nbsp;&nbsp;</li>
                       </ul>
                   </Col></Row>
                    <t>-----------------------------------------------------------------------------------------------Copyright 2023 &copy; Ezzi-ticket---------------------------------------------------------------------------</t><br/><br/>
                </Container>
            </footer>
        </>
    );
}
export default Footer1;
