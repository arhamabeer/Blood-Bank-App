import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons({ click }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        className="SignInBtn"
        onClick={() => click()}
        variant="outlined"
        color="secondary"
      >
        Sign In
      </Button>
    </div>
  );
}
