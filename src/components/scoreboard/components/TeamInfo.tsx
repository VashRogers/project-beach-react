import { Box, Stack, TextField, Typography } from "@mui/material";
import { customColors } from "../../../constants/colors";
import { Dispatch, SetStateAction } from "react";

interface iTeamInfo {
    team: string;
    teamPoints: string;
    setTeam: Dispatch<SetStateAction<string>>;
    teamLabel: string;
}

export function TeamInfo({ team, setTeam, teamLabel, teamPoints }: iTeamInfo) {
    return (
        <Stack justifyContent="center" alignItems="center">
            <TextField
                id="outlined-basic"
                label={teamLabel}
                size="small"
                value={team}
                onChange={(event) => setTeam(event.target.value)}
            />

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
        </Stack>
    );
}
