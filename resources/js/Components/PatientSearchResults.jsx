import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import  TableContainer  from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PatientSearchResults = ({ patients }) => {
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    const handleRowClick = (patientId) => {
        setSelectedPatientId(patientId);
        // Add logic to navigate to patient details page here
    }

    return (
        <>
            {!patients ? (
                <div>Loading...</div>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Patient ID</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Middle Name</TableCell>
                                <TableCell>Birthdate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {patients.map((patient) => (
                                <TableRow
                                    key={patient.hpercode}
                                    hover
                                    onClick={() =>
                                        handleRowClick(patient.hpercode)
                                    }
                                >
                                    <TableCell>
                                        {selectedPatientId === patient.hpercode}
                                    </TableCell>
                                    <TableCell>{patient.hpercode}</TableCell>
                                    <TableCell>{patient.patlast}</TableCell>
                                    <TableCell>{patient.patfirst}</TableCell>
                                    <TableCell>{patient.patbdate}</TableCell>
                                    <TableCell>{patient.patmiddle}</TableCell>
                                    <TableCell>{patient.patbdate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            ;
        </>
    );
}

export default PatientSearchResults;
