import React from "react";
import "./screen.css";
import UserProfInfo from "../components/userProfInfo";

function UserProf({ location }) {
  // console.log('userProf=> ', location.detail.item)

  var item = location.detail.item;
  // console.log('userProf=> ', item)

  return (
    <div className="div-userProf">
      <div className="div-head-userProf">
        <h1>USER PROFILE</h1>
        <div className="div-head-userProf-info">
          <h2 style={{ margin: 5 }}>{item.fname}</h2>
          <h3 style={{ marginTop: 5 }}>
            {item.wanted === "WantBlood" ? "Blood Seeker" : "Blood Donor"}
          </h3>
        </div>
      </div>
      <div className="div-user-info">
        <UserProfInfo
          name="BLOOD GROUP"
          value={item.bloodGroup}
          clr={location.detail.clr}
        />
        <UserProfInfo
          name="GENDER"
          value={item.gender}
          clr={location.detail.clr}
        />
        <UserProfInfo
          name="CONTACT"
          value="Not Available"
          clr={location.detail.clr}
        />
        <UserProfInfo name="CITY" value={item.city} clr={location.detail.clr} />
        <UserProfInfo
          name="ADDRESS"
          value={item.address}
          clr={location.detail.clr}
        />
      </div>
      <div className="div-user-info-btn">
        <button
          style={
            item.wanted === "WantBlood"
              ? { backgroundColor: "green" }
              : { backgroundColor: "red" }
          }
        >
          {item.wanted === "WantBlood" ? "Give Blood" : "Request Blood"}
        </button>
      </div>
    </div>
  );
}

export default UserProf;
