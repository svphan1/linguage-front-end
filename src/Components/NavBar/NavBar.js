import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ControlledOpenSelect from './Select';
import './NavBar.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className="title">
            Linguage
          </Typography>
          <Button color="inherit" className="navbar-tabs">Login</Button>
          <Button color="inherit" className="navbar-tabs">Sign up</Button>
          <ControlledOpenSelect />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);