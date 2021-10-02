import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "35%",
    borderBottom: "7px solid #db074a",
    borderTop: "4px solid #db074a",
    textAlign: "center",
    margin: 10,
    padding: 0,
    borderRadius: 7,
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
});

export default function UserProfInfo({ name, value, clr }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card
      className={classes.root}
      style={{ borderBottomColor: clr, borderTopColor: clr }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6" component="h2">
          {name}
        </Typography>

        <Typography variant="h5" style={{ fontWeight: "bold" }} component="h1">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
