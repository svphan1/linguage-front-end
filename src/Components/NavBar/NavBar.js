import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ControlledOpenSelect from "./Select";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NavBar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  navLink: {
    textDecoration: "none",
    marginLeft: 12,
    marginRight: 20
  },
  navLogin: {
    color: "white",
    backgroundColor: "#56acb5",
    marginLeft: "40vw",
    padding: ".2rem 2rem",
    borderRadius: "4rem"
  },
  navSignup: {
    color: "white",
    backgroundColor: "#56acb5",
    padding: ".2rem 1.5rem",
    borderRadius: "4rem"
  },
  titleText: {
    fontFamily: ["Courgette"],
    fontSize: "3.5rem",
    margin: "0 0 0 10vw",
    color: "#56acb5"
  },
  titleLink: {
    textDecoration: "none"
  }
};

const NavBar = props => {
  const { classes, changeToLogin } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Link to="/" className={classes.titleLink}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.titleText}
            >
              Linguage
            </Typography>
          </Link>
          <Link to="/login" className={classes.navLink}>
            <Button className={classes.navLogin} onClick={changeToLogin}>
              Login
            </Button>
          </Link>
          <Link to="/signup" className={classes.navLink}>
            <Button className={classes.navSignup}>Sign up</Button>
          </Link>
          <ControlledOpenSelect />
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
