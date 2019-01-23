import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LanguageSelect from "./LanguageSelect";
import ChannelSelect from "./ChannelSelect";
import ChannelBox from "../ChannelBox/ChannelBox";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: "1.3rem",
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    margin: "0 1rem 0 11rem"
  },
  secondaryHeading: {
    fontSize: "1.1rem",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: ["Nunito"],
    fontWeight: "bold"
  },
  typography: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1rem"
  },
  btnStyle: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: ".9rem",
    color: "white",
    borderRadius: "2rem",
    backgroundColor: "#56acb5",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "#61ccd8"
    }
  },
  postMargin: {
    margin: "-.2rem 6rem"
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "30%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

const DetailedExpansionPanel = props => {
  const { classes, postRequest } = props;
  const hideChannelBox = true;
  return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Broadcast:</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Select your language preferences
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Typography variant="caption" className={classes.typography}>
                Learning:
                <LanguageSelect />
              </Typography>
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption" className={classes.typography}>
                Select your spoken language:
                <LanguageSelect />
              </Typography>
            </div>
            <div className={classNames(classes.column, classes.helper)}>
              <Typography variant="caption" className={classes.typography}>
                Post to
                <ChannelSelect />
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions className={classes.postMargin}>
            <Button size="small" color="primary" className={classes.btnStyle} onClick={postRequest}>
              Post
            </Button>
            <Button size="small" color="primary" className={classes.btnStyle}>
              Add Channel
              {hideChannelBox ? null : <ChannelBox postRequest={postRequest}/>}
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
  );
};

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);