import React from 'react';
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import SearchBar from "material-ui-search-bar";
import Button from '@material-ui/core/Button';
import CardUsers from '../components/cardUsers'

export default function Users(){
    return(
        <div className='div-users-main'>
            <div className='home-top-div'>
                <h1 style={{ fontSize: 40 }}>
                    AAA BLOOD BANK
                </h1>
                <img src={Logo} className='logo-img' alt="Logo Image" />
            </div>
            <div className='header-div-home'>
                <div className='header-div-home-search'>
                    <SearchBar
                    // value={this.state.value}
                    // onChange={(newValue) => this.setState({ value: newValue })}
                    // onRequestSearch={() => doSomethingWith(this.state.value)}
                    />
                </div>
                <div className='header-div-home-userinfo'>
                    <img className='header-div-home-userinfo-icon' src={User} width='50px' height='50px' alt="" />
                    &nbsp; User Name
                </div>
                <div className='header-div-home-logout'>
                    <Button variant="contained" className='header-div-home-logout-btn'>Log Out</Button>
                </div>
            </div>
            <div>
                <CardUsers name='ARHAM ABEER AHMED' purpose='DONOR' clr='green' />
                <CardUsers name='BIRAT DHABA' purpose='DONOR' clr='green' />
                <CardUsers name='TESTER 1' purpose='REQUIRED' clr='red' />
                <CardUsers name='TESTER 2' purpose='REQUIRED' clr='red' />
                <CardUsers name='TESTER 3' purpose='DONOR' clr='green' />
            </div>
        </div>
    )
}