import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import ListItem from '@material-ui/core/ListItem'
import Input from '@material-ui/core/Input'

class RenderAttendee extends React.Component {

    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidUpdate = event => {
        console.log(this.props.children.state)
    }

    render() {
        return(
            <Paper>
                <form>
                    <ListItem>
                        <Input
                            disableUnderline={true}
                            id='jobTitle'
                            label='jobTitle'
                            value={this.props.children.state.jobTitle}
                            onChange={this.props.children.handleChange('jobTitle')}
                        />
                        <Input
                            disableUnderline={true}
                            id='fullName'
                            label='fullName'
                            value={this.props.children.state.fullName}
                            onChange={this.props.children.handleChange('fullName')}
                        />
                        <Input
                            disableUnderline={true}
                            id='account'
                            label='account'
                            value={this.props.children.state.account}
                            onChange={this.props.children.handleChange('account')}
                        />
                        <Input
                            disableUnderline={true}
                            id='nopecGeneralAssemblyMember'
                            label='nopecGeneralAssemblyMember'
                            value={this.props.children.state.nopecGeneralAssemblyMember}
                            onChange={this.props.children.handleChange('nopecGeneralAssemblyMember')}
                        />
                        <Input
                            disableUnderline={true}
                            id='table'
                            label='table'
                            value={this.props.children.state.table}
                            onChange={this.props.children.handleChange('table')}
                        />
                        <Input
                            disableUnderline={true}
                            id='grantFlag'
                            label='grantFlag'
                            value={this.props.children.state.grantFlag}
                            onChange={this.props.children.handleChange('grantFlag')}
                        />
                    </ListItem>

                </form>
            </Paper>
        )
    }
}

export default RenderAttendee;