import Button from "@material-ui/core/Button";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";

export default function Header({func}) {
  return (
    <div className="home-top-div1">
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
          <Button variant="contained" className="header-div-home-logout-btn" onClick={()=>func()}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
