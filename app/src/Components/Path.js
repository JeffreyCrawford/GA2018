import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

class Path extends React.Component {

    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props);
        console.log(this.props)     
    }

    render() {
        return(
            <div>
                <Paper>
                    PATH
                </Paper>
            </div>
        )
    }
}

export default Path