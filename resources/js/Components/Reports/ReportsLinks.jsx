import React from 'react';


// MUI
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import  Typography  from '@mui/material/Typography';
import  Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';




const LightTooltip = styled(({ className, ...props}) => (
    <Tooltip {...props} classes={{ popper: className}} />
))(({ theme }) => ({
    [` & .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 12,
    }
}));

export default function ReportsLinks( {reports}) {

    const style = {
        width: '100%',
    }
    return (
        <Stack direction="column" spacing={1}>
            {reports.length > 0 ? (
                reports.map((report) => (
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Link href="#" underline="hover">
                            <LightTooltip
                                title={report.tooltip}
                                placement="bottom-start"
                            >
                                <Typography variant="subtitle1">
                                    {report.reportName.length > 20
                                        ? `${report.reportName.substring(
                                              0,
                                              60
                                          )}...`
                                        : report.reportName}
                                </Typography>
                            </LightTooltip>
                        </Link>
                    </Paper>
                ))
            ) : (
                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <Typography variant="body1" color="textSecondary">
                        No result found!
                    </Typography>
                </Box>
            )}
        </Stack>
    );
}
