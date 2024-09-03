/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { TeamInfo } from "./components/TeamInfo";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SportsTennisRoundedIcon from "@mui/icons-material/SportsTennisRounded";
import { SetsTable } from "./components/SetsTable";

export default function Scoreboard() {
    const [team1, setTeam1] = useState("TIME 1");
    const [team2, setTeam2] = useState("TIME 2");

    const [team1Points, setTeam1Points] = useState("00");
    const [team2Points, setTeam2Points] = useState("00");

    const [team1Sets, setTeam1Sets] = useState({
        set1: 0,
        set2: 0,
        set3: 0,
        set4: 0,
        set5: 0,
    });

    const [team2Sets, setTeam2Sets] = useState({
        set1: 0,
        set2: 0,
        set3: 0,
        set4: 0,
        set5: 0,
    });

    return (
        <Box display="flex" margin={2}>
            <Paper sx={{ flexGrow: 1, justifyContent: "center" }}>
                <Typography variant="h6" gutterBottom textAlign="center">
                    Contador de Tênis
                </Typography>

                <Box
                    p={2}
                    flexGrow={1}
                    flexDirection="row"
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                >
                    <TeamInfo
                        teamLabel=""
                        team={team1}
                        teamPoints={team1Points}
                        setTeam={setTeam1}
                    />

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        margin={4}
                    >
                        <ClearRoundedIcon fontSize="large" />
                        <SportsTennisRoundedIcon fontSize="large" />
                    </Box>

                    <TeamInfo
                        teamLabel=""
                        team={team2}
                        teamPoints={team2Points}
                        setTeam={setTeam2}
                    />
                </Box>

                <Box
                    display="flex"
                    flexGrow={1}
                    justifyContent="center"
                    // border={1}
                    borderRadius={1}
                    // borderColor={colors.grey[500]}
                    m={2}
                    p={2}
                >
                    <SetsTable
                        team1={team1}
                        team2={team2}
                        team1Sets={team1Sets}
                        team2Sets={team2Sets}
                    />
                </Box>
            </Paper>
        </Box>
    );
}
