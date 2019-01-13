import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import image from "../../../assets/spock.jpeg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  appBar: {
    borderRadius: "2rem",
    width: "80%",
    backgroundColor: "white",
    marginTop: "1.5rem"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around"
  },
  typography: {
    fontFamily: ["Nunito"],
    fontWeight: "bold"
  },
  chip: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#56acb5",
    border: "white",
    height: "2.5rem",
    width: "9.5rem",
    borderRadius: "2rem",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "#61ccd8"
    }
  },
});

const MainChannelSeed = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Chip
            avatar={<Avatar alt="user photo" src={image} />}
            label="rockSpock"
            className={classes.chip}
            variant="outlined"
          />
          <Chip
            label="Klingon"
            className={classes.chip}
            variant="outlined"
            color="primary"
          />
          <Chip
            label="Waiting..."
            className={classes.chip}
            variant="outlined"
            color="primary"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

MainChannelSeed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainChannelSeed);