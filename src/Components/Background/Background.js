import React from "react";
import { withStyles } from "@material-ui/core/styles";
import image from "../../assets/linguage.jpg";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Background.css";

const styles = {
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  startBtn: {
    color: "white",
    position: "absolute",
    bottom: "4rem",
    marginLeft: "40vw",
    padding: ".5rem 6rem",
    borderRadius: "4rem",
    backgroundColor: "darkorange",
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
      transition: ".2s ease-out",
      backgroundColor: "#61ccd8"
    },
    animation: "moveInBottom .5s ease-out 0.75s",
    animationFillMode: "backwards"
  },
  subTitle: {
    fontFamily: ["Nunito"],
    fontSize: "1.3rem",
    color: "darkorange",
    position: "absolute",
    margin: "5rem 0 0 18vw",
    animation: "moveInLeft .5s ease-out 0.75s",
    animationFillMode: "backwards"
  }
};

const Background = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <img src={image} alt="background image" className={classes.background} />
      <Typography className={classes.subTitle}>
        Speak a language. Instantly.
      </Typography>
      <Link to="/login">
        <Button className="btn-started" className={classes.startBtn}>
          Get Started
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default withStyles(styles)(Background);
