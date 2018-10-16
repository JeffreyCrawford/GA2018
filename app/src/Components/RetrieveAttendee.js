import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class RetrieveAttendee extends React.Component {




  state = {
		fullName: "",
		firstName: "",
		middleName: "",
		lastName: "",
		jobTitle: "",
		account: "",
		countyAccountAccount: "",
		rsvpGa2018: "",
		proxyDesigneeGa2018: "",
		ga2018AsADesigneeFor: "",
		nopecGeneralAssemblyMember: 0,
		accountTypeAccountAccount: "",
		gaDelegateAccountAccount: "",
		checkInTime: "",
		badge: ""
  };

    componentDidMount() {
    var _this = this;
    let id = 2;
    fetch("/api/attendees/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res[0])
        _this.setState({
            fullName: res[0].fullName,
            firstName: res[0].firstName,
            middleName: res[0].middleName,
            lastName: res[0].lastName,
            jobTitle: res[0].jobTitle,
            account: res[0].account,
            countyAccountAccount: res[0].countyAccountAccount,
            rsvpGa2018: res[0].rsvpGa2018,
            proxyDesigneeGa2018: res[0].proxyDesigneeGa2018,
            ga2018AsADesigneeFor: res[0].ga2018AsADesigneeFor,
            nopecGeneralAssemblyMember: res[0].nopecGeneralAssemblyMember,
            accountTypeAccountAccount: res[0].accountTypeAccountAccount,
            gaDelegateAccountAccount: res[0].gaDelegateAccountAccount,
            checkInTime: res[0].checkInTime,
            badge: res[0].badge
        }) 
    });
  }

  render() {

    const { classes } = this.props;

  return (
    <div>
    <Card className={classes.card}>
      <CardContent>
        <Paper className={classes.root} elevation={1} margin={300}>
            <Typography>
                Welcome {this.state.jobTitle} {this.state.fullName}!
            </Typography>
        </Paper>
        </CardContent>
    </Card>
    </div>
  );
}
}

RetrieveAttendee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetrieveAttendee);