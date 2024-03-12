import React from 'react';
import reports from '@/LocalAPI/Reports/reports.json';

// MUI
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import  Typography  from '@mui/material/Typography';
import  Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




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

export default function ReportsLinks() {

    const style = {
        width: '100%',
    }
    return (
        <Stack direction="column" spacing={2}>
            {reports.map((report) => (
                <List key={report.id}>
                    <ListItem>
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
                    </ListItem>
                    <Divider variant="middle" />
                </List>
            ))}
        </Stack>
    );
}
