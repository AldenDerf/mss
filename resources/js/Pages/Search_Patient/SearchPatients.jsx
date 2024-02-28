import React, { useState } from "react";
import * as MUI from "@mui/material";
import { router } from "@inertiajs/react";

// MUI Components
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { DateField } from "@mui/x-date-picker/DateField";

export default function SearchPatients({ patients, searchInputs }) {
    const [searchData, setSearchData] = useState(searchInputs);

    const handleChange = (event) => {
        setSearchData({
            ...searchData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        router.get("/patients/search", searchData, { preserveState: true });
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid xs={4}>
                            <TextField
                                label="Patient ID (hpercode)"
                                name="hpercode"
                                value={searchData.hpercode || ""}
                                onChange={handleChange}
                                margin="normal"
                            />
                        </Grid>

                        <Grid xs={4} >
                            <TextField
                                label="First Name"
                                name="patfirst"
                                value={searchData.patfirst || ""}
                                onChange={handleChange}
                                margin="normal"
                            />
                        </Grid>

                        <Grid xs={4}>
                            <TextField
                                label="Last Name"
                                name="patlast"
                                value={searchData.patlast || ""}
                                oChange={handleChange}
                                margin="normal"
                            />
                        </Grid>

                        <Grid xs={46}>

                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>

        // <div>
        //     <form onSubmit={handleSubmit}>
        //         {/* MUI Input fields for hpercode, patfirst, patlast,  patdob*/}
        //         <MUI.TextField
        //             label="Patient ID (hpercode)"
        //             name="hpercode"
        //             value={searchData.hpercode || ""}
        //             onChange={handleChange}
        //             margin="normal"
        //         />
        //         {/* ... other input fields similarly */}
        //         <MUI.Button type="submit" variant="contained">
        //             Search
        //         </MUI.Button>
        //     </form>

        //     <MUI.TableContainer component={MUI.Paper}>
        //         <MUI.Table>
        //             <MUI.TableHead>
        //                 <MUI.TableRow>
        //                     <MUI.TableCell>Patient ID</MUI.TableCell>
        //                     <MUI.TableCell>First Name</MUI.TableCell>
        //                     <MUI.TableCell>Last Name</MUI.TableCell>
        //                     <MUI.TableCell>Date of Birth</MUI.TableCell>
        //                 </MUI.TableRow>
        //             </MUI.TableHead>

        //             <MUI.TableBody>
        //                 {patients.data.map((patient) => (
        //                     <MUI.TableRow key={patient.hpercode}>
        //                         <MUI.TableCell>{patient.hpercode}</MUI.TableCell>
        //                         <MUI.TableCell>{patient.patfirst}</MUI.TableCell>
        //                         <MUI.TableCell>{patient.patlast}</MUI.TableCell>
        //                         <MUI.TableCell>{patient.patdob}</MUI.TableCell>
        //                     </MUI.TableRow>
        //                 ))}
        //             </MUI.TableBody>
        //         </MUI.Table>
        //     </MUI.TableContainer>
        // </div>
    );
}
