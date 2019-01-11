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
  }
});

class ControlledOpenSelect extends React.Component {
  state = {
    language: "",
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("language", this.state.language)
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
          <InputLabel htmlFor="demo-controlled-open-select">
            Language
          </InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.language}
            onChange={this.handleChange}
            inputProps={{
              name: "language",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'Spanish'}>Spanish</MenuItem>
            <MenuItem value={'German'}>German</MenuItem>
            <MenuItem value={'Portuguese'}>Portuguese</MenuItem>
            <MenuItem value={'French'}>French</MenuItem>
            <MenuItem value={'Italian'}>Italian</MenuItem>
            <MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
            <MenuItem value={'Mandarin'}>Mandarin</MenuItem>
            <MenuItem value={'Cantonese'}>Cantonese</MenuItem>
            <MenuItem value={'Japanese'}>Japanese</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledOpenSelect);
