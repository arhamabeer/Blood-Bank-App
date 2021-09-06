import React from "react";
import "./screen.css";
import Button from "@material-ui/core/Button";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Search from "../components/search";
import CardDoner from "../components/cardDoner";

function SearchComp(props) {
    // console.log('searcgh=> ', props.location.data)
    var data = props.location.data
  return (
    <div className="div-users-main">
      <div className="home-top-div">
        <h1 style={{ fontSize: 40 }}>AAA BLOOD BANK</h1>
        <img src={Logo} className="logo-img" alt="Logo Image" />
      </div>
      <div className="header-div-home">
        <div className="header-div-home-search">
          {/* <Search getSearchItem={getSearchItem} /> */}
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
        {data.map((val) => {
          return <CardDoner purpose="DONOR" clr="green" item={val} />;
        })}
      </div>
    </div>
  );
}

export default SearchComp;
