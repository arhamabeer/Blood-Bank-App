import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Search from "../components/search";
import Button from "@material-ui/core/Button";
import CardDoner from "../components/cardDoner";
import {useHistory} from 'react-router-dom'

import { connect } from "react-redux";
import action from "../store/action";

function Donors(props) {
  const hist = useHistory()


  useEffect(async () => {
    await props.getFBUsers();
  }, []);

  var totalUsers = props.users;
  var Donors = "";

  const groupByProp = (arr, check) => {
    var result = {};
    arr.forEach(function (item) {
      var val = item[check];
      if (!result[val]) result[val] = [item];
      else result[val].push(item);
    });
    Donors = result.Donor;
  };
  groupByProp(totalUsers, "wanted");

  // console.log(Donors)
  if (!Donors) {
    return <h1>Loading</h1>;
  } else {
    const keys = Object.keys(Donors);
    var allUsers = keys.map((item) => {
      return { _id: item, ...Donors[item] };
    });
  }


  const getSearchItem = (e) => {
    console.log('search=> ',allUsers)
    let UppCase = e.toUpperCase()

    let index = allUsers.map((v, idx) => v.bloodGroup.startsWith(UppCase) ? idx : '').filter(String);   //return the index
    // console.log(indexes)

    var value =  index.map(v => {
      return allUsers[v]
    })
    // console.log(value);


    // const check = obj=>obj.bloodGroup.startsWith(e);
    // const index = allUsers.findIndex(check)
    // var value = allUsers[index]
    // console.log(value);


    // console.log('search=> ',allUsers)
    // function getIndex(e) {
    //   return allUsers.findIndex(obj=>(console.log(obj.bloodGroup.startsWith('O'))))
    // }
    // console.log(props)

    hist.push({ pathname: "/users/search", data: value , purpose: 'donor'});
  };
    
  return (
    <div className="div-users-main">
      <div className="home-top-div">
        <h1 style={{ fontSize: 40 }}>AAA BLOOD BANK</h1>
        <img src={Logo} className="logo-img" alt="Logo Image" />
      </div>
      <div className="header-div-home">
        <div className="header-div-home-search">
          <Search getSearchItem={getSearchItem} />
        </div>
        <div className="header-div-home-userinfo">
          <img
            className="header-div-home-userinfo-icon"
            src={User}
            width="50px"
            height="50px"
            alt=""
          />
          &nbsp; User Name
        </div>
        <div className="header-div-home-logout">
          <Button variant="contained" className="header-div-home-logout-btn">
            Log Out
          </Button>
        </div>
      </div>
      <div>
        {allUsers.map((val) => {
          return <CardDoner purpose="DONOR" clr="green" item={val} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getFBUsers: () => dispatch(action.getFBUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Donors);
