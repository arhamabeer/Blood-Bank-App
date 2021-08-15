import React, { useState, useEffect } from 'react'

import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import SearchBar from "material-ui-search-bar";
import Button from '@material-ui/core/Button';
import CardHome from '../components/cardHomeDonor'

import { connect } from 'react-redux'
import action from "../store/action";




function Home(props) {

    useEffect(() => {
        props.getFBUsers()
    }, []);

    // console.log('PROPS>>> ', props.users)
    var totalDonors = props.users
    if (!totalDonors) {
        return (
            <h1>Loading</h1>
        )
    } else {
        return (
            <div className='div-home-main'>
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
                    <CardHome check={totalDonors} name='Donors' color='green' />
                    <CardHome check={totalDonors} name='Requests' color='red' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})


const mapDispatchToProps = {
    getFBUsers: action.getFBUsers,
  };
  
// const mapDispatchToProps = (dispatch) => ({
//     // getFBUsers: () => dispatch(getFBUsers()),
// })


export default connect(mapStateToProps, mapDispatchToProps)(Home);
