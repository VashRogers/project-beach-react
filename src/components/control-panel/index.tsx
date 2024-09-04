import { Box, Paper, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { TeamField } from "./components/TeamField";

interface iControlPanelProps {
    team1: string;
    team2: string;
    setTeam1: Dispatch<SetStateAction<string>>;
    setTeam2: Dispatch<SetStateAction<string>>;
}

export default function ControlPanel({
    team1,
    team2,
    setTeam1,
    setTeam2,
}: iControlPanelProps) {
    return (
        <Box display="flex" margin={2}>
            <Paper sx={{ flexGrow: 1, justifyContent: "center" }}>
                <Typography variant="h6" gutterBottom textAlign="center">
                    Controle
                </Typography>
                <Box display="flex" flexGrow={1} p={2}>
                    <Stack
                        flexDirection="row"
                        flexGrow={1}
                        p={1}
                        justifyContent="space-around"
                    >
                        <TeamField
                            team={team1}
                            teamLabel="TIME 1"
                            setTeam={setTeam1}
                        />
                        <TeamField
                            team={team2}
                            teamLabel="TIME 2"
                            setTeam={setTeam2}
                        />
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
