import React, { useState } from "react";
import { router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// Search Patient Results
import SearchPatientResults from "../../Components/SearchPatient/SearchPatientResults";

// MUI Components
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Date Picker
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import Stack from "@mui/material/Stack";

// Buttons
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

//Containers
import Box from "@mui/material/Box";

export default function SearchPatients({ patients, searchInputs, auth }) {
    // gridStyle
    const gridStyle = {
        border: "1px solid #000",
    };

    const boxStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
    };
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
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Patient Search
                </h2>
            }
        >
            <Head title="Search" />
            <CssBaseline />
            <Container maxWidth="md" my={2}>
                <form onSubmit={handleSubmit}>
                    <Stack direction="row" spacing={2}>
                        {/* Patient ID Field */}
                        <TextField
                            label="Patient ID (hpercode)"
                            name="hpercode"
                            value={searchData.hpercode || ""}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: "10px" }}
                        />

                        {/* Firs name field */}
                        <TextField
                            label="First Name"
                            name="patfirst"
                            value={searchData.patfirst || ""}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            style={{ marginRight: "10px" }}
                        />

                        {/* Last name field */}
                        <TextField
                            label="Last Name"
                            name="patlast"
                            value={searchData.patlast || ""}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </Stack>
                </form>
            </Container>

            <Box component="section" textAlign="center" my={2}>
                <Typography variant="h4">Result</Typography>
            </Box>

            {/* Patien Results */}
            <Container
                maxWidth="md"
                sx={{
                    maxHeight: "500px",
                    maxWidth: "500px",
                    overflow: "auto",
                    overflowX: "auto",
                }}
            >
                {patients.data.length > 0 ? (
                    patients.data.map((patient) => (
                        <SearchPatientResults
                            key={patient.hpercode}
                            patient={patient}
                        />
                    ))
                ) : (
                    <h1>No Patients Found</h1>
                )}
            </Container>
        </AuthenticatedLayout>
    );
}
