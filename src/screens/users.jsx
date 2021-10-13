import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import CardUsers from "../components/cardUsers";
import "./screen.css";
import { connect } from "react-redux";
import action from "../store/action";
import Swal from "sweetalert2";

function Users(props) {
  const [users, updateUsers] = useState([]);

  useEffect(async () => {
    // await props.getFBUsers();
    props.getMongoUsers();
  }, []);

  var totalUsers = props.users;

  const getSearchItem = (e) => {
    // console.log(e);
    let UppCase = e.toUpperCase();
    var filteredUsers = totalUsers.filter((user) => {
      return user.bloodGroup.startsWith(UppCase);
    });
    if (filteredUsers.length) {
      updateUsers(filteredUsers);
    } else {
      updateUsers("empty");
    }
  };
  // console.log(users);

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
          <h1>404. User not Found</h1>
        ) : users.length ? (
          users.map((v) => {
            return (
              <CardUsers
                name={v.fname}
                purpose={v.wanted}
                clr={v.wanted === "Donor" ? "green" : "red"}
              />
            );
          })
        ) : (
          totalUsers.map((v) => {
            return (
              <CardUsers
                name={v.fname}
                purpose={v.wanted}
                clr={v.wanted === "Donor" ? "green" : "red"}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.musers,
});

const mapDispatchToProps = {
  // getFBUsers: () => dispatch(action.getFBUsers()),
  getMongoUsers: action.getMongoUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
