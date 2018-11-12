import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

class ScanBox extends React.Component {

    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props);
        console.log(this.props)     
    }



    render() {
        return(
            <Paper>
                <form>
                    <ListItem>
                        <TextField 
                            autoFocus
                            id='badge'
                            label='badge'
                            value={this.props.children.state.badge}
                            onChange={this.props.children.handleChange('badge')}
                        />
                    </ListItem>
                    <ListItem>
                        <Button 
                            onClick= {this.props.children.handleSubmit}
                            label='submit'
                            type="submit"
                        />
                        <Button 
                            onClick={this.props.children.checkInButton}
                            label='Check In'
                        />
                    </ListItem>
                </form>
            </Paper>
        )
    }
}

export default ScanBox;