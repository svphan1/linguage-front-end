import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ControlledOpenSelect from "./Select";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./NavBar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const NavBar = props => {
  const { classes, changeToLogin } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" color="inherit" className="title">
            Linguage
          </Typography>
          <Button
            className="nav-btn-login"
            as={Link}
            to="/login"
            onClick={changeToLogin}
          >
            Login
          </Button>
          <Button className="nav-btn-signup">Sign up</Button>
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
