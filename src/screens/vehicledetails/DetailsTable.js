import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(modal, mfgYear, assignedDriver, chasisNumber, engineType) {
    return { modal, mfgYear, assignedDriver, chasisNumber, engineType };
}

const rows = [
    createData("Maruti 800", 2000, "AAA", 2400001, "Diesel"),
    createData("Maruti 801", 2000, "AAA", 2400001, "Diesel"),
    createData("Maruti 802", 2001, "AAA", 2400001, "Petrol"),
    createData("Maruti 803", 2003, "AAA", 2400001, "Diesel"),
    createData("Maruti 804", 2006, "AAA", 2400001, "Petrol"),
    createData("Maruti 805", 2004, "AAA", 2400001, "Diesel"),
    createData("Maruti 806", 2008, "AAA", 2400001, "Petrol"),
    createData("Maruti 807", 2010, "AAA", 2400001, "Diesel"),
];

export default function DetailsTable() {
    const classes = useStyles();

    return (
        <TableContainer style={{ width: '70%' }} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Modal</TableCell>
                        <TableCell align="right">Manufactured Year</TableCell>
                        <TableCell align="right">Assigned Driver</TableCell>
                        <TableCell align="right">Chasis Number</TableCell>
                        <TableCell align="right">Engine Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.modal}>
                            <TableCell component="th" scope="row">
                                {row.modal}
                            </TableCell>
                            <TableCell align="right">{row.mfgYear}</TableCell>
                            <TableCell align="right">{row.assignedDriver}</TableCell>
                            <TableCell align="right">{row.chasisNumber}</TableCell>
                            <TableCell align="right">{row.engineType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
