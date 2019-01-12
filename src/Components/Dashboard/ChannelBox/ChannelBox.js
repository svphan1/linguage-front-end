import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./ChannelBox.css";

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    border: "1px solid #ccc",
    borderRadius: ".3rem",
    margin: "0 1rem",
    boxShadow: " 2px 6px 10px 0.5px rgba(0, 0, 0, 0.4)"
  },
  chanHeader: {
    backgroundColor: "darkorange",
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius: ".3rem"
  },
  appBar: {
    borderRadius: ".5rem"
  }
});

class ChannelBox extends React.Component {
  state = {
    value: "one"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
//map here
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            className={classes.chanHeader}
          >
            <Tab value="one" label="Main Channel"/>
            <Tab value="two" label="Spanish Channel" />
            <Tab value="three" label="French Channel" />
          </Tabs>
        </AppBar>
        {value === "one" && <TabContainer>Item One</TabContainer>}
        {value === "two" && <TabContainer>Item Two</TabContainer>}
        {value === "three" && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

ChannelBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChannelBox);
