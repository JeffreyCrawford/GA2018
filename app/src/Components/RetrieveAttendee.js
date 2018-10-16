import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


/* Attendee Card Styling */
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});


/* Pulls attendee information from the API and renders it on the page */
class RetrieveAttendee extends React.Component {

    /* Blank state to store retrieved attendee information */
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

    /* When the component loads, fetch the requested API records and modify the state accordingly */
    componentDidMount() {
        var _this = this;

        /* Get requests for the designated id value */
        let id = 2;
        fetch("/api/attendees/" + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        /* Return the get response in JSON format */
        .then(function(res) {
            return res.json()
        })
        /* Console log the first response in the array (tighten this up?) and set the state to the response */
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

    /* Render the changed state in a neat card */
    render() {

        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1} margin={300}>
                    <Card className={classes.card}>
                        <CardContent>
                    
                            <Typography>
                            Welcome {this.state.jobTitle} {this.state.fullName}!
                            </Typography>

                        </CardContent>
                    </Card>
                </Paper>
            </div>
        );
    }
}

RetrieveAttendee.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RetrieveAttendee);