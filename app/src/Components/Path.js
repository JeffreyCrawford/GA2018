import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Input from '@material-ui/core/Input'



class Path extends React.Component {

    
    /* CONSTRUCTOR + STATE */
    constructor(props) {
        super(props);
        console.log(this.props.children.state.nopecGeneralAssemblyMember)     

    }

    

    

    render() {
        return(
            <div>
                <br />
                <Divider />
                
                    <Paper>
                        PATH
                    </Paper>
                
                <Divider />
                <br />
            </div>
        )
    }
}

export default Path