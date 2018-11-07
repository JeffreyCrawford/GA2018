import React, { Component } from 'react'
import ScanBox from './ScanBox'
import RenderAttendee from './RenderAttendee'
import Path from './Path'

class Wrapper extends React.Component {
    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            firstName: '',
            middleName: '',
            lastName: '',
            jobTitle: '',
            account: '',
            countyAccountAccount: '',
            rsvpGa2018: '',
            proxyDesigneeGa2018: '',
            ga2018AsADesigneeFor: '',
            nopecGeneralAssemblyMember: '',
            accountTypeAccountAccount: '',
            gaDelegateAccountAccount: '',
            checkInTime: '',
            badge: ''
        }
    }


    /* FUNCTIONS */
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    retrieveAttendee = event => {
        let badge = this.state.badge;
        fetch('/api/attendees/' + badge, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            console.log("HERE IS WHERE IT RENDERS THE ATTENDEE")
        })
        .catch(error => {
            alert("Invalid bar code. Please try again.")
        })
    }

    retrieveCommunity = event => {
        let community = this.state.account;
        fetch('/api/accounts/' + community, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            console.log("HERE IS WHERE IT RETRIEVES MEMBERS FROM THE COMMUNITY")
        })
        .catch(error => {
            alert("Error, community not found")
        })
    }

    checkIn = event => {
        fetch("api/attendees/", {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    handleCancel = event => {
        this.setState({
            fullName: '',
            firstName: '',
            middleName: '',
            lastName: '',
            jobTitle: '',
            account: '',
            countyAccountAccount: '',
            rsvpGa2018: '',
            proxyDesigneeGa2018: '',
            ga2018AsADesigneeFor: '',
            nopecGeneralAssemblyMember: '',
            accountTypeAccountAccount: '',
            gaDelegateAccountAccount: '',
            checkInTime: '',
            badge: ''
        })
    }

    /* RENDER */
    render() {
        return(
            <div>
                <ScanBox />
                <RenderAttendee />
                <Path />
            </div>
        )
    }

}

export default Wrapper;