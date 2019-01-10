import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import DashNavBar from "./DashNavBar";
import ProfileCard from "./ProfileCard/ProfileCard";
import HeadingDropDown from "./Heading/HeadingDropDown";
import ChannelBox from "./ChannelBox/ChannelBox";
import Grid from "@material-ui/core/Grid";
import "../../Container/App.css";

const styles = theme => ({
  chanBox: {
    display: "flex"
  },
  random: {
    display: "flex",
    width: "100%",
    marginTop: "3rem"
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <DashNavBar />
        <HeadingDropDown />
        <Grid container>
          <Grid item sm={4} xs={12} className="hideMobile">
            <ProfileCard />
          </Grid>
          <Grid item sm={8} xs={12} className={classes.chanBox}>
            <div className={classes.random}>
              <ChannelBox />
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
