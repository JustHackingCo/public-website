import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";
import logo from '../assets/logo.png'
class NavigationBar extends Component {
    render() {
        return (
            <Styled pathname={this.props.location.pathname}>
                <Navbar fixed="top" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand><NavLink to="/">
                        <img src={logo} style={{width: 200}} alt='CTF4Hire' />
                        </NavLink></Navbar.Brand>
                        <h2 className="home-text">
                            Custom cybersecurity training. Personalized learning.
                            <br />
                            <span>Capture the Flag for you and your team.</span>
                        </h2>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" >
                            <IconContext.Provider value={{ size: "32px" }}>
                                <FaBars />
                            </IconContext.Provider>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item><NavLink exact activeClassName="active" to="/">Home</NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" to="/info">Information</NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" to="/events">Past Events</NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" to="/services">Services</NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" to="/team">Team</NavLink></Nav.Item>
                                <Nav.Item><NavLink activeClassName="active" to="/requestCTF">Request a CTF</NavLink></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        <div className="social-links">
                            <a href="https://twitter.com/ctf4hire" target="_blank" rel="noreferrer"> <FaTwitter /></a>
                            <a href="https://www.facebook.com/ctf4hire" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                            <a href="https://www.instagram.com/ctf4hire/" target="_blank" rel="noreferrer"> <FaInstagram /></a>
                            <a href="https://linkedin.com/company/ctf4hire/" target="_blank" rel="noreferrer"> <FaLinkedin /></a>
                        </div>
                    </Container>
                </Navbar>
            </Styled>
        )
    }
}

const Styled = styled.div`

    .navbar * {
        transition: ease-in-out 0.3s;
        
    }

    .navbar {
        transition: ease-in-out 0.3s;
        position: relative;
        display: flex;
        z-index: 997;
        overflow-y: hidden;
    }

    .navbar-brand a {
        color: #fff;
    }

    .navbar-nav .nav-item + .nav-item {
        margin-left: 30px;
    }

    .nav-item a{
        display: block;
        position: relative;
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    .nav-link{
        padding: 0 !important;
    }

    .nav-item a:hover, .nav-item > .active, .nav-item:hover > a {
        color: #fff !important;
        text-decoration: none;
    }

    .nav-item a:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #18d26e;
        visibility: hidden;
        width: 0px;
        transition: all 0.3s ease-in-out 0s;
    }

    .nav-item a:hover:before, .nav-item:hover > a:before, .nav-item > .active:before {
        visibility: visible;
        width: 25px;
    }

    .social-links {
        margin-top: 40px;
        display: flex;
    }

    .social-links a {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        line-height: 1;
        margin-right: 8px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    .social-links a:hover {
        background: #18d26e;
    }

    @media (max-width: 992px) {
        .navbar-collapse{
            margin: 0px !important;
            position: fixed;
            top: 55px;
            right: 15px;
            bottom: 15px;
            left: 15px;
            z-index: 9999;
            overflow-y: auto;
            background: rgba(0, 0, 0, 0.7);
            transition: ease-in-out 0.2s;
            border-radius: 10px;
            padding: 10px 0;
            border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .navbar-toggler {
            position: fixed;
            padding: 0;
            right: 22px;
            top: 22px;
            z-index: 9998;
            border: 0;
            background: none;
            font-size: 24px;
            transition: all 0.4s;
            outline: none !important;
            line-height: 1;
            cursor: pointer;
            text-align: right;
        }
        .navbar-toggler:hover, .navbar-toggler:hover svg{
            color: #fff;
            transition: none !important;
        }
        .nav-item a{
            display: block;
            position: relative;
            margin: 10px 20px;
            font-weight: 500;
            outline: none;
        }
        .navbar-nav .nav-item + .nav-item {
            margin-left: 0px;
        }
    }

    ${props => props.pathname === '/' ? `
    /*******************************************************/
    /********************* HOME ROUTE **********************/
        .navbar {
            transition: ease-in-out 0.3s;
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            z-index: 997;
            overflow-y: hidden;
        }

        .navbar .container {
            flex-direction: column;
            align-items: start;
        }

        .navbar-brand {
            font-size: 48px;
            margin: 0;
            padding: 0;
            line-height: 1;
            font-weight: 700;
            font-family: "Poppins", sans-serif;
            
        }


        .home-text {
            font-size: 24px;
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.8);
            font-family: "Raleway", sans-serif;
        }

        .home-text span {
            color: #fff;
            border-bottom: 2px solid #18d26e;
            padding-bottom: 6px;
        }

        .navbar-collapse {
            margin-top: 35px;
        }
        
        @media (max-width: 992px) {
            .navbar-brand {
                font-size: 36px !important;
            }
            
            .navbar .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .home-text {
                font-size: 20px;
                line-height: 30px;
            }
            .social-links {
                margin-top: 15px;
            }
            
        }

    /*******************************************************/
    /******************* END HOME ROUTE ********************/
    ` : `
    /*******************************************************/
    /******************* NOT HOME ROUTE ********************/

        .navbar {
            height: 80px;
            background: rgba(0, 0, 0, 0.9);
            padding: 0;
        }

        .navbar-brand{
            font-size: 36px;
            font-weight: 700;
            font-family: "Poppins", sans-serif;
            transform: scale(0.4);
        }

        .home-text{
            display: none;
        }

        .social-links {
            display: none;
        }
        
        @media (max-width: 992px) {
            .navbar-brand {
                padding: 0px 15px;
                font-size: 26px !important;
            }
        }

    /*******************************************************/
    /***************** END NOT HOME ROUTE ******************/    
    `}
`


// withRouter allows to get the current path in the props
export default withRouter(NavigationBar)