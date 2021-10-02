import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Search from "../components/search";
import Button from "@material-ui/core/Button";
import CardDoner from "../components/cardDoner";
import { useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { connect } from "react-redux";
import action from "../store/action";

function Donors(props) {
  const [users, updateUsers] = React.useState([]);
  const hist = useHistory();

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
    // console.log(e);
    let UppCase = e.toUpperCase();
    var filteredUsers = allUsers.filter((user) => {
      return user.bloodGroup.startsWith(UppCase);
    });
    if (filteredUsers.length) {
      updateUsers(filteredUsers);
    } else {
      updateUsers("empty");
    }
  };

  // console.log('users=> ',users)
  return (
    <div className="div-users-main">
      <div className="home-top-div">
        <h1 style={{ fontSize: 40 }}>AAA BLOOD BANK</h1>
        <img src={Logo} className="logo-img" alt="Logo Image" />
      </div>
      <div className="header-div-home">
        <div className="header-div-home-search">
          <SearchBar
            classes="searchbar"
            onChange={(e) => getSearchItem(e)}
            onCancelSearch={() => updateUsers([])}
          />
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
        {users === "empty" ? (
          <h1>404. Donor not Found</h1>
        ) : users.length ? (
          users.map((val) => {
            return <CardDoner purpose="DONOR" clr="green" item={val} />;
          })
        ) : (
          allUsers.map((v) => {
            return <CardDoner purpose="DONOR" clr="green" item={v} />;
          })
        )}
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
