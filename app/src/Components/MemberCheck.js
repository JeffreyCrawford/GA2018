import React, { Component } from 'react'
function MemberCheck() {
    let self = this;
    if(this.props.children.state.nopecGeneralAssemblyMember == 'Member') {
        return(<h1>Member</h1>)
        alert("Member")
    }
    else if (this.props.children.state.nopecGeneralAssemblyMember == '') {
        return(<h1>None</h1>)
    }
    else {
        return(<h1>Guest</h1>)
    }
}

export default MemberCheck();