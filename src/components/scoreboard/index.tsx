/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { TeamInfo } from "./components/TeamInfo";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SportsTennisRoundedIcon from "@mui/icons-material/SportsTennisRounded";
import { SetsTable } from "./components/SetsTable";

interface iScoreboardProps {
    team1: string;
    team2: string;
    setTeam1: Dispatch<SetStateAction<string>>;
    setTeam2: Dispatch<SetStateAction<string>>;
    team1Points: string;
    team2Points: string;
    setTeam1Points: Dispatch<SetStateAction<string>>;
    setTeam2Points: Dispatch<SetStateAction<string>>;
}

export default function Scoreboard({
    team1,
    team2,
    team1Points,
    team2Points,
}: iScoreboardProps) {
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
                    <TeamInfo team={team1} teamPoints={team1Points} />

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

                    <TeamInfo team={team2} teamPoints={team2Points} />
                </Box>

                <Box
                    display="flex"
                    flexGrow={1}
                    justifyContent="center"
                    borderRadius={1}
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
