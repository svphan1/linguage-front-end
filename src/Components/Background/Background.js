import React from "react";
import { withStyles } from "@material-ui/core/styles";
import image from "../../assets/linguage.jpg";
import Button from "@material-ui/core/Button";

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
    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
      transition: ".2s ease-out",
      backgroundColor: "#61ccd8"
    }
  }
};

const Background = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <img src={image} alt="background image" className={classes.background} />
      <Button className="btn-started" className={classes.startBtn}>
        Get Started
      </Button>
    </React.Fragment>
  );
};

export default withStyles(styles)(Background);
