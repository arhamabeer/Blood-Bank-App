import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Button from "@material-ui/core/Button";
import CardHome from "../components/cardHomeDonor";
import { connect } from "react-redux";
import action from "../store/action";
import { useHistory } from "react-router";
import Header from "../components/header";

function Home(props) {
  var history = useHistory()
  useEffect(async () => {
    // props.getFBUsers();
    await props.getMongoUsers();
  }, []);
  // console.log("Mongo res=>", props.musers);
  // console.log("PROPS>>> ", totalDonors);
  var totalDonors = props.musers;
  if (totalDonors === undefined) {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: "520px",
          fontSize: 42,
        }}
      >
        Fetching Data... <Loader />
      </div>
    );
  } else {
    return (
      <div className="div-home-main">
        <Header func={()=>props.logout(history)} />
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
  getMongoUsers: action.getMongoUsers,
  logout: action.logout,
};

// const mapDispatchToProps = (dispatch) => ({
//     // getFBUsers: () => dispatch(getFBUsers()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
