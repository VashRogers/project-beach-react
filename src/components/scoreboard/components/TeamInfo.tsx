import { Box, Stack, Typography } from "@mui/material";
import { customColors } from "../../../constants/colors";

interface iTeamInfo {
    team: string;
    teamPoints: string;
    serving: boolean
}

export function TeamInfo({ team, teamPoints, serving }: iTeamInfo) {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Typography variant="h6">{team}</Typography>

            <Box
                display="flex"
                m={1}
                p={2}
                border={1}
                borderRadius={1}
                bgcolor={customColors.darkBg}
                justifyContent="center"
                alignItems="center"
                width="25%"
                height="15%"
            >
                <Typography color="#10a000" fontSize={35} fontWeight="bolder">
                    {teamPoints}
                </Typography>
            </Box>

            <Box textAlign="center" p={2}>
                <Typography variant="h6">
                    {team} {serving && <span>🔴</span>}{" "}
                    {/* Indicador de saque */}
                </Typography>
                <Typography variant="h4">{teamPoints}</Typography>
            </Box>
        </Stack>
    );
}
