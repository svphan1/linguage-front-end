import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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
    margin: "0 1rem"
  },
  chanHeader: {
    backgroundColor: "darkorange",
    display: 'flex',
    justifyContent: 'space-evenly'
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

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            className={classes.chanHeader}
          >
            <Tab value="one" label="Main Channel" className={classes.tabs}/>
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
