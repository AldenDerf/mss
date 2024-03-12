import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, useRemember } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import MssLink from "@/Components/Dashboard/MssLink";
import Link from '@mui/material/Link';


// MUI
import Container from '@mui/material/Container';
import { Breadcrumbs } from "@mui/material";


export default function Dashboard({ auth}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
               <Breadcrumbs aria-label="breadcrumb">
                     <Link underline="hover" color="inherit" href="/dashboard">
                          Dashboard
                     </Link>
               </Breadcrumbs>
            }
        >
            <Head title="Dashboard" />

            {/* Links */}
            <Container maxWidth="lg">
                <MssLink />
            </Container>

        </AuthenticatedLayout>
    );
}
