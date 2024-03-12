import { Link } from "@inertiajs/react";

// Date Component
import ToLongDate from "../DateConversion/ToLongDate";

// MUI
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';

// MUI Colors
import { blue } from "@mui/material/colors";

const PatientSearchResults = (patient) => {

    // Hover
    const linkHover = {
        transition: "color 0.3s ease-in-out",

        // Hover styles
        ":hover": {
            color: "#00f", // Change the color on hover
        },
    };

    return (
        <Link href="/" style={linkHover}>
            <Paper sx={{ p: '8px', marginY:2 }} >
                <Grid container spacing={2} alignItems="center">
                    {/* Image of the Patient */}
                    <Grid xs={1}>
                        <Avatar>{patient.patient.patfirst.charAt(0)}</Avatar>
                    </Grid>

                    {/* Patient ID */}
                    <Grid xs={4}>
                        <Typography variant="body1" gutterBottom>
                            {patient.patient.hpercode}
                        </Typography>
                    </Grid>

                    {/* Name */}
                    <Grid xs={4}>
                        <Typography variant="body1" gutterBottom>
                            {patient.patient.patfirst} {patient.patient.patlast}
                        </Typography>
                    </Grid>

                    {/* Date of Birth */}
                    <Grid xs={3}>
                        <Typography variant="body1" gutterBottom>
                            <ToLongDate dateProp={patient.patient.patbdate} />
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    );
};

export default PatientSearchResults;
