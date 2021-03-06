import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  typography: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
  }
});

class HomeLanguageSelect extends React.Component {
  state = {
    age: "",
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select" className={classes.typography}>
            Language
          </InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value={1}>English</MenuItem>
            <MenuItem value={2}>Español</MenuItem>
            <MenuItem value={3}>Deutsch</MenuItem>
            <MenuItem value={4}>Português Brasileiro</MenuItem>
            <MenuItem value={5}>French</MenuItem>
            <MenuItem value={6}>Italian</MenuItem>
            <MenuItem value={7}>Tiếng Việt</MenuItem>
            <MenuItem value={8}>中文</MenuItem>
            <MenuItem value={9}>Dansk</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

HomeLanguageSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeLanguageSelect);
