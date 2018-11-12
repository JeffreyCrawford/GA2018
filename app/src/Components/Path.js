import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Input from '@material-ui/core/Input'



class Path extends React.Component {

    
    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props);
        console.log(this.props.children.state.nopecGeneralAssemblyMember)     
        function MemberCheck(props) {
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
    }

    

    

    render() {
        return(
            <div>
                <br />
                <Divider />
                
                    <Paper>
                        PATH
                        <Input 
                        value={this.props.children.MemberCheck()}
                        />
                    </Paper>
                
                <Divider />
                <br />
            </div>
        )
    }
}

export default Path