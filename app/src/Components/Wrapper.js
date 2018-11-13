import React, { Component } from 'react'
import ScanBox from './ScanBox'
import RenderAttendee from './RenderAttendee'
import Path from './Path'
import CommunityMembers from './CommunityMembers';



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
            badge: '',
            table: '',
            grantFlag: ''
        }
        this.baseState = this.state 
    }
    resetForm = () => {
      this.setState(this.baseState)
    }
    


    /* FUNCTIONS */
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    };



    retrieveAttendee = event => {
        let badge = this.state.badge;
        let self = this;
        console.log(this.state.badge)
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
            self.setState({
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
                badge: res[0].badge,
                table: res[0].table,
                grantFlag: res[0].grantFlag
            })
        })
        .then(function() {
            console.log(self.state)
        })
        .catch(error => {
            alert("Invalid bar code. Please try again.")
            window.location.reload()
        })
    }




 

    checkIn = event => {
        console.log(this.state.badge)
        let self = this
        let badge = this.state.badge
        fetch("api/attendees/badges/" + badge, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function() {
            console.log(self.state)
        })

        .catch(error => {
            console.log(error)
        })
        .then(function() {
            self.handleCancel();
        })
    }

    handleCancel = event => {
        let self = this;
        self.setState({
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
            badge: '',
            table: '',
            grantFlag: ''
        })
        console.log(self.state)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.retrieveAttendee()
    }

    checkInButton = event => {
        event.preventDefault();
        this.checkIn()
         
        
        
    }

    /* RENDER */
    render() {
        return(
            <div>
                <ScanBox>{this}</ScanBox>
                <RenderAttendee>{this}</RenderAttendee>
                <Path>{this}</Path>
                <CommunityMembers>{this}</CommunityMembers>
            </div>
        )
    }

}

export default Wrapper;