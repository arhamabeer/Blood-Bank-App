import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: "7px solid",
    borderTop: "5px solid",
    margin: 25,
    cursor: "pointer",
    backgroundColor: "#f2f8ff",
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
    marginBottom: 12,
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default function CardHome({ name, color, check }) {
  const classes = useStyles();

  const history = useHistory();
  // console.log(name)
  // console.log('PROPS>>> ', check)

  let don = 0;
  let want = 0;
  if (!check) {

  } else {
    console.log("check", check);
    var total = check.map((v) => {
      console.log('check1, ',v)
      // return v
      return v.wanted.startsWith("Donor") === true ? (don += 1) : (want += 1);
    });
    // console.log('total=> ', total)
  }
  const changeLocation = (clr) => {
    if (clr === "red") {
      history.push({ pathname: "/users/required" });
    } else {
      history.push({ pathname: "/users/donors" });
    }
  };

  return (
    <Card
      onClick={() => changeLocation(color)}
      style={{ borderBottomColor: color, borderTopColor: color }}
      className={classes.root}
      variant="outlined"
    >
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          Total {name}
        </Typography>

        <Typography variant="h3" style={{ color: color }} component="h2">
          {color === "red" ? want : don}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Click to see all {name}
        </Button>
      </CardActions>
    </Card>
  );
}
