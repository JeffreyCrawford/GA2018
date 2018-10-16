import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

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
    fetch("/api/attendees/1", {
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
            fullName: res[0].fullName
        }) 
    });
  }

  render() {

    const { classes } = this.props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography>hello</Typography>

                <TextField
					id="fullName"
					label="fullName"
					className={classes.textField}
					value={this.state.fullName}
					style = {{width: 300}}
					margin="normal"
				/>
            
      </Paper>
    </div>
  );
}
}

RetrieveAttendee.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetrieveAttendee);