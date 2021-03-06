import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 350,
    maxWidth: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: "7px solid",
    borderTop: "5px solid",
    margin: 25,
    cursor: "pointer",
    backgroundColor: "#f2f8ff",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  },
});

export default function CardDoner({ purpose, clr, item }) {
  //   const history = useHistory();

  //   const changeLocation = () => {
  //     history.push({ pathname: "/userprofile" });
  //   };

  // const itemcheck =()=>{
  //     console.log(item)
  // }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //   console.log("item", item);
  return (
    <Link
      to={{
        pathname: "/userprofile",
        // className: "link-card",
        detail: { item: item, clr: clr },
      }}
    >
      <Card
        // onClick={itemcheck}
        style={{ borderBottomColor: clr, borderTopColor: clr }}
        className={classes.root}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.fname}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {purpose === "DONOR" ? "Blood Donor" : "Blood Seeker"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Click for more Info</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
