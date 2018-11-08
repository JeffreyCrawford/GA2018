import React, { Component } from 'react'
import ScanBox from './ScanBox'
import RenderAttendee from './RenderAttendee'
import Path from './Path'

class Wrapper extends React.Component {
    /* CONSTRUCTOR + STATE */
    constructor() {
        super();
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
            console.log("attendee: " + res)
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
        .then(function(res) {
            return res.json()
        })
        .then(function(){
            window.location.reload()
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

    handleSubmit = event => {
        this.retrieveAttendee();
        this.retrieveCommunity();
        this.checkIn();
    }

    /* RENDER */
    render() {
        return(
            <div>
                <ScanBox>{this}</ScanBox>
                <RenderAttendee>{this}</RenderAttendee>
                <Path>{this}</Path>
            </div>
        )
    }

}

export default Wrapper;