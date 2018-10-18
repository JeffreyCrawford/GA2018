import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RetrieveAttendee from './RetrieveAttendee'
import Typography from '@material-ui/core/Typography'


/* Landing Page styling */
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  banner: {
    textAlign: "center"
  }
});


/* Landing Page renders what the user will see by default */
class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <div>
        <Typography className={classes.banner} variant="h3">
          Welcome Banner
        </Typography>

        <RetrieveAttendee />
      </div>

    )
  }

}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);