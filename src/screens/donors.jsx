import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Button from "@material-ui/core/Button";
import CardDoner from "../components/cardDoner";
import { useHistory } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { connect } from "react-redux";
import action from "../store/action";
import Loader from "../components/loader";

function Donors(props) {
  const [users, updateUsers] = React.useState([]);
  const hist = useHistory();

  useEffect(async () => {
    // await props.getFBUsers();
    props.getMongoUsers();
  }, []);

  // console.log('Donor=>', props.musers)
  var totalUsers = props.musers;
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
  // console.log('Donor 1=>', Donors)

  if (!Donors) {
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
        Fetching Donors... <Loader />
      </div>
    );
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
            placeholder="Search by Blood Group"
            style={{ background: "black" }}
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
  // users: state.users,
  musers: state.musers,
});

const mapDispatchToProps = {
  // getFBUsers: () => dispatch(action.getFBUsers()),
  getMongoUsers: action.getMongoUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Donors);
