import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../../assets/profile.png';

const styles = {
  card: {
    maxWidth: 200,
    margin: '3rem 0 0 10rem',
    boxShadow: " 2px 2px 6px 0.5px rgba(0, 0, 0, 0.4)"
  },
  media: {
    height: '14rem',
    borderRadius: "5px",
    margin: "5px",
    border: "1px solid #ccc"
  },
  button: {
    justifyContent: "center"
  },
  typography: {
    textAlign: "center",
    fontFamily: ["Nunito"],
    fontWeight: "bold"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className={classes.typography}>
            svphan
          </Typography>
          <Typography component="p" className={classes.typography}>
            Currently learning: French
            Speaks: English, Vietnamese, Spanish
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);