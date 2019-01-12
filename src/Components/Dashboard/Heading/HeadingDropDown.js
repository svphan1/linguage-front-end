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

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1.3rem"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1.1rem"
  },
  typography: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1rem"
  },
  postStyle: {
    fontFamily: ["Nunito"],
    fontWeight: "bold",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#56acb5",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "#61ccd8"
    }
  },
  postMargin: {
    margin: "-.6rem 10rem"
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
  return (
    <form onSubmit={postRequest}>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Broadcast</Typography>
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
                <ChannelSelect postRequest={postRequest} />
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions className={classes.postMargin}>
            <Button size="small" color="primary" className={classes.postStyle}>
              Post
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    </form>
  );
};

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
