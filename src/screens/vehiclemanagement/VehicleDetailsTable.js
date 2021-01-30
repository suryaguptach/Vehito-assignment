import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import { Button, Typography } from "@material-ui/core";
import Modal from 'react-modal';
import { FormControl, InputLabel } from '@material-ui/core';
import './VehicleDetailsTable.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: "auto",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 650
    },
    selectTableCell: {
        width: 60
    },
    tableCell: {
        width: 130,
        height: 40
    },
    input: {
        width: 130,
        height: 40
    }
}));

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 400
    }
};

const createData = (name, mfgYear, asignedDriver, chasisNumber, engineType) => ({
    id: name.replace(" ", "_"),
    name,
    mfgYear,
    asignedDriver,
    chasisNumber,
    engineType,
    isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
    const classes = useStyles();
    const { isEditMode } = row;
    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
                <Input
                    value={row[name]}
                    name={name}
                    onChange={e => onChange(e, row)}
                    className={classes.input}
                />
            ) : (
                    row[name]
                )}
        </TableCell>
    );
};

export default function VehicleDetails() {
    const [rows, setRows] = React.useState([
        createData("Maruti 800", 2000, "AAA", 2400001, "Diesel"),
        createData("Maruti 801", 2000, "AAA", 2400001, "Diesel"),
        createData("Maruti 802", 2001, "AAA", 2400001, "Petrol"),
        createData("Maruti 803", 2003, "AAA", 2400001, "Diesel"),
        createData("Maruti 804", 2006, "AAA", 2400001, "Petrol"),
        createData("Maruti 805", 2004, "AAA", 2400001, "Diesel"),
        createData("Maruti 806", 2008, "AAA", 2400001, "Petrol"),
        createData("Maruti 807", 2010, "AAA", 2400001, "Diesel"),
    ]);
    const [previous, setPrevious] = React.useState({});
    const classes = useStyles();
    const [modal, setModal] = React.useState('');
    const [manufacturedYear, setManufacturedYear] = React.useState('');
    const [assignedDriver, setAssignedDriver] = React.useState('');
    const [chasisNumber, setChasisNumber] = React.useState('');
    const [engineType, setEngineType] = React.useState('');
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const onToggleEditMode = id => {
        setRows(state => {
            return rows.map(row => {
                if (row.id === id) {
                    return { ...row, isEditMode: !row.isEditMode };
                }
                return row;
            });
        });
    };

    const onChange = (e, row) => {
        if (!previous[row.id]) {
            setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = rows.map(row => {
            if (row.id === id) {
                return { ...row, [name]: value };
            }
            return row;
        });
        setRows(newRows);
    };

    const onRevert = id => {
        const newRows = rows.map(row => {
            if (row.id === id) {
                return previous[id] ? previous[id] : row;
            }
            return row;
        });
        setRows(newRows);
        setPrevious(state => {
            delete state[id];
            return state;
        });
        onToggleEditMode(id);
    };

    const addVehicleHandler = () => {
        setModal('');
        setAssignedDriver('');
        setChasisNumber('');
        setEngineType('');
        setManufacturedYear('');
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    const modalChangeHandler = (e) => {
        setModal(e.target.value);
    }

    const manufacturedYearChangeHandler = (e) => {
        setManufacturedYear(e.target.value);
    }

    const assignedDriverChangeHandler = (e) => {
        setAssignedDriver(e.target.value);
    }

    const chasisNumberChangeHandler = (e) => {
        setChasisNumber(e.target.value);
    }

    const engineTypeChangeHandler = (e) => {
        setEngineType(e.target.value);
    }

    const submitClickHandler = () => {
        setModalIsOpen(false);
        let newVehicleDeatils = createData(modal, manufacturedYear, assignedDriver, chasisNumber, engineType);
        setRows([...rows, newVehicleDeatils]);
    }

    return (
        <Fragment>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" />
                            <TableCell align="left">Modal</TableCell>
                            <TableCell align="left">Manufactured Year</TableCell>
                            <TableCell align="left">Assigned Driver</TableCell>
                            <TableCell align="left">Chasis Number</TableCell>
                            <TableCell align="left">Engine Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell className={classes.selectTableCell}>
                                    {row.isEditMode ? (
                                        <>
                                            <IconButton
                                                aria-label="done"
                                                onClick={() => onToggleEditMode(row.id)}
                                            >
                                                <DoneIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => onRevert(row.id)}
                                            >
                                                <RevertIcon />
                                            </IconButton>
                                        </>
                                    ) : (
                                            <IconButton
                                                aria-label="delete"
                                                onClick={() => onToggleEditMode(row.id)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        )}
                                </TableCell>
                                <CustomTableCell {...{ row, name: "name", onChange }} />
                                <CustomTableCell {...{ row, name: "mfgYear", onChange }} />
                                <CustomTableCell {...{ row, name: "asignedDriver", onChange }} />
                                <CustomTableCell {...{ row, name: "chasisNumber", onChange }} />
                                <CustomTableCell {...{ row, name: "engineType", onChange }} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Button onClick={addVehicleHandler} style={{ backgroundColor: 'lightpink' }}>Add</Button>
            </div>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                contentLabel="New Vehicle Details"
                onRequestClose={closeModalHandler}
                style={customStyles}>
                <Typography style={{ textAlign: 'center' }} variant="h5" component="h2">
                    New Vehicle Details
                </Typography>
                <br />
                <FormControl required className="vehicle-details-input">
                    <InputLabel htmlFor="modal">Modal</InputLabel>
                    <Input id="modal" type="text" value={modal}
                        modal={modal}
                        onChange={modalChangeHandler} />
                </FormControl>
                <br /><br />
                <FormControl required className="vehicle-details-input">
                    <InputLabel htmlFor="mfgYear">Manufactured Year</InputLabel>
                    <Input id="mfgYear" type="text" value={manufacturedYear}
                        manufacturedyear={manufacturedYear}
                        onChange={manufacturedYearChangeHandler} />
                </FormControl>
                <br /><br />
                <FormControl required className="vehicle-details-input">
                    <InputLabel htmlFor="assignedDriver">Assigned Driver</InputLabel>
                    <Input id="assignedDriver" type="text" value={assignedDriver}
                        assigneddriver={assignedDriver} onChange={assignedDriverChangeHandler} />
                </FormControl>
                <br /><br />
                <FormControl required className="vehicle-details-input">
                    <InputLabel htmlFor="chasisnumber">Chasis Number</InputLabel>
                    <Input id="chasisnumber" type="text" value={chasisNumber}
                        chasisnumber={chasisNumber}
                        onChange={chasisNumberChangeHandler} />
                </FormControl>
                <br /><br />
                <FormControl required className="vehicle-details-input">
                    <InputLabel htmlFor="engineType">Engine Type</InputLabel>
                    <Input id="engineType" type="text" value={engineType}
                        enginetype={engineType}
                        onChange={engineTypeChangeHandler} />
                </FormControl>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={submitClickHandler} color="primary">SUBMIT</Button>
                </div>
                <br />
            </Modal>
        </Fragment>
    );
}
