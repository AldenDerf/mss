import React from "react";

// MUI
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

// Icons
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";

function MssLink() {
    return (
        <Stack spacing={2} direction="row">
            {/* Reports */}
            <Link
                href="/reports"
                color="inherit"
                underline="none"
                display="flex"
                sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    width: "100px",
                    padding: "3px",
                    transition: "background-color 0.3s",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                        backgroundColor: "#c0c0c0", // Change to your desired hover color
                    },
                }}
            >
                <Tooltip title="Reports" arrow>
                    <Box sx={{ width: "100%" }}>
                        <Box>
                            <ArticleOutlinedIcon fontSize="large" row />
                        </Box>
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    whiteSpace: "normal",
                                    overflowWrap: "break-word",
                                }}
                            >
                                Reports
                            </Typography>
                        </Box>
                    </Box>
                </Tooltip>
            </Link>

            {/* MSWD Assessment Tool */}
            <Link
                href="/mss"
                color="inherit"
                underline="none"
                display="flex"
                sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    width: "100px",
                    padding: "3px",
                    transition: "background-color 0.3s",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                        backgroundColor: "#c0c0c0", // Change to your desired hover color
                    },
                }}
            >
                <Tooltip title="MSWD Assessment Tool" arrow>
                    <Box sx={{ width: "100%" }}>
                        <Box>
                            <DynamicFormOutlinedIcon fontSize="large" row />
                        </Box>
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    whiteSpace: "normal",
                                    overflowWrap: "break-word",
                                }}
                            >
                                MSWD Assess...
                            </Typography>
                        </Box>
                    </Box>
                </Tooltip>
            </Link>
        </Stack>
    );
}
export default MssLink;
