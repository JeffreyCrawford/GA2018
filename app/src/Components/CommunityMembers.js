import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',

  },
  table: {
    minWidth: 700,
  },
});



class CommunityMembers extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [],
      data: [{}],
      page: 0,
      rowsPerPage: 5,
    };
  }

      /* Receives changes in the form and modifies the state as they happen*/
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentDidUpdate() {
        let self = this
        let account = this.props.children.state.account
        
        fetch('/api/attendees/accounts/' + account, {
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
                data: res
            });

        })

        .catch(error => {
            console.log(error)
        })

    }

render() {
const { classes } = this.props;
const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>RSVP</TableCell>
            <TableCell>GA Member</TableCell>
            <TableCell>Proxy Designee</TableCell>
            <TableCell>As a Designee for</TableCell>
            <TableCell>Delegate</TableCell>
            <TableCell>Check-In Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>{row.rsvpGa2018}</TableCell>
                <TableCell>{row.nopecGeneralAssemblyMember}</TableCell>
                <TableCell>{row.proxyDesigneeGa2018}</TableCell>
                <TableCell>{row.ga2018AsADesigneeFor}</TableCell>
                <TableCell>{row.gaDelegateAccountAccount}</TableCell>
                <TableCell numeric>{row.checkInTime}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

CommunityMembers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityMembers);