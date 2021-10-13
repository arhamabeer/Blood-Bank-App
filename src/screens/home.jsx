import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Button from "@material-ui/core/Button";
import CardHome from "../components/cardHomeDonor";
import { connect } from "react-redux";
import action from "../store/action";

function Home(props) {
  useEffect(async() => {
    // props.getFBUsers();
    await props.getMongoUsers();
  }, []);
  // console.log("Mongo res=>", props.musers);
  // console.log("PROPS>>> ", props.users);
  var totalDonors = props.musers;
  if (totalDonors === undefined) {
    // console.log("PROPS123>>> ", totalDonors.length);
    return (
      <div>
        <Loader />
        <h1>load</h1>
      </div>
    );
  } else {
    return (
      <div className="div-home-main">
        <div className="home-top-div">
          <h1 style={{ fontSize: 40 }}>AAA BLOOD BANK</h1>
          <img src={Logo} className="logo-img" alt="Logo Image" />
        </div>
        <div className="header-div-home">
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
          <CardHome check={totalDonors} name="Donors" color="green" />
          <CardHome check={totalDonors} name="Requests" color="red" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  musers: state.musers,
});

const mapDispatchToProps = {
  // getFBUsers: action.getFBUsers,
  getMongoUsers: action.getMongoUsers
};

// const mapDispatchToProps = (dispatch) => ({
//     // getFBUsers: () => dispatch(getFBUsers()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
