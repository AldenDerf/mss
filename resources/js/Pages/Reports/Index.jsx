import * as React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ReportsLinks from "@/Components/Reports/ReportsLinks";

// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Head } from "@inertiajs/react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import Typography from "@mui/material/Typography";

export default function Reports({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="primary" href="/dashboard">
                        Dashboard
                    </Link>
                    <Link underline="hover" color="inherit" href="/reports">
                        Reports
                    </Link>
                </Breadcrumbs>
            }
        >
            <Head title="Reports" />
            <Container maxWidth="md">
                {/* Search */}
                <Paper
                    component="form"
                    sx={{
                        mx: 'auto',
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 400,
                        mb: 4,
                    }}
                >
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            padding: "8px",
                            '&:focus': {
                                outline: "none",
                                border: "none",
                            },
                        }}
                        placeholder="Search Report"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Paper>

                <ReportsLinks />
            </Container>
        </AuthenticatedLayout>
    );
}
