import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface iTeamFieldProps {
    teamLabel: string;
    team: string;
    setTeam: Dispatch<SetStateAction<string>>;
}

export function TeamField({ teamLabel, team, setTeam }: iTeamFieldProps) {
    return (
        <TextField
            id="outlined-basic"
            label={teamLabel}
            size="small"
            value={team}
            onChange={(event) => setTeam(event.target.value)}
        />
    );
}
