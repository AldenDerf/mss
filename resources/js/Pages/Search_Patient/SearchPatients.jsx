import React, {useState} from 'react';
import * as MUI from '@mui/material';
import {router} from '@inertiajs/react';

export default function SearchPatients({ patients, searchInputs}) {
    const [searchData, setSearchData] = useState(searchInputs);

    const handleChange = (event) => {
        setSearchData({
            ...searchData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        router.get('/patients/search', searchData, { preserveState: true });

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* MUI Input fields for hpercode, patfirst, patlast,  patdob*/}
                <MUI.TextField
                    label="Patient ID (hpercode)"
                    name="hpercode"
                    value={searchData.hpercode || ""}
                    onChange={handleChange}
                    margin="normal"
                />
                {/* ... other input fields similarly */}
                <MUI.Button type="submit" variant="contained">
                    Search
                </MUI.Button>
            </form>

            <MUI.TableContainer component={MUI.Paper}>
                <MUI.Table>
                    <MUI.TableHead>
                        <MUI.TableRow>
                            <MUI.TableCell>Patient ID</MUI.TableCell>
                            <MUI.TableCell>First Name</MUI.TableCell>
                            <MUI.TableCell>Last Name</MUI.TableCell>
                            <MUI.TableCell>Date of Birth</MUI.TableCell>
                        </MUI.TableRow>
                    </MUI.TableHead>

                    <MUI.TableBody>
                        {patients.data.map((patient) => (
                            <MUI.TableRow key={patient.hpercode}>
                                <MUI.TableCell>{patient.hpercode}</MUI.TableCell>
                                <MUI.TableCell>{patient.patfirst}</MUI.TableCell>
                                <MUI.TableCell>{patient.patlast}</MUI.TableCell>
                                <MUI.TableCell>{patient.patdob}</MUI.TableCell>
                            </MUI.TableRow>
                        ))}
                    </MUI.TableBody>
                </MUI.Table>
            </MUI.TableContainer>
        </div>
    );
}
