import { Box, Divider, Stack, Typography } from "@mui/material";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Dispatch, SetStateAction } from "react";

const BORDER_COLOR_SERVING = "#FFD700";
const BORDER_COLOR_DEFAULT = "transparent";
const BACKGROUND_TEAM_COLOR = "#A4CC2B";
const BACKGROUND_SCORE_COLOR = "#FFFFFF";
const FONT_COLOR_SCORE = "#002E6D";

interface iNewScoreBoard {
    team1: string;
    team2: string;
    setTeam1: Dispatch<SetStateAction<string>>;
    setTeam2: Dispatch<SetStateAction<string>>;
    team1Points: string;
    team2Points: string;
    setTeam1Points: Dispatch<SetStateAction<string>>;
    setTeam2Points: Dispatch<SetStateAction<string>>;
    team1Sets: number;
    team2Sets: number;
    time: number;
    servingTeam: string;
}

export function NewScoreboard({
    team1,
    team2,
    team1Points,
    team1Sets,
    team2Points,
    team2Sets,
    time,
    servingTeam,
}: iNewScoreBoard) {

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    const isServing = (team: string) => servingTeam === team ? BORDER_COLOR_SERVING : BORDER_COLOR_DEFAULT;

    return (
        <Box
            sx={{
                width:"50rem",
                backgroundColor: FONT_COLOR_SCORE,
                color: "white",
                padding: "16px",
                borderRadius: "8px",
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Box sx={{ width: "50px", textAlign: "center" }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        Pontos
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ width: "50px", textAlign: "center" }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        Sets
                    </Typography>
                </Box>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
                {/* Seção de Pontos - Time 1 */}
                <Box
                    sx={{
                        backgroundColor: BACKGROUND_TEAM_COLOR,
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        border: `2px solid ${isServing(team1)}`,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team1Points}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team1}
                    </Typography>
                    {servingTeam === "team1" && (
                        <SportsTennisIcon
                            sx={{
                                marginLeft: "8px",
                                color: BORDER_COLOR_SERVING,
                            }}
                        />
                    )}
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        backgroundColor: BACKGROUND_SCORE_COLOR,
                        color: FONT_COLOR_SCORE,
                        width: "50px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team1Sets}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ backgroundColor: BACKGROUND_TEAM_COLOR, marginY: "8px" }} />

            <Stack direction="row" alignItems="center" spacing={1}>
                {/* Seção de Pontos - Time 2 */}
                <Box
                    sx={{
                        backgroundColor: BACKGROUND_TEAM_COLOR,
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        border: `2px solid ${isServing(team2)}`,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team2Points}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team2}
                    </Typography>
                    {servingTeam === "team2" && (
                        <SportsTennisIcon
                            sx={{
                                marginLeft: "8px",
                                color: BORDER_COLOR_SERVING,
                            }}
                        />
                    )}
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        backgroundColor: BACKGROUND_SCORE_COLOR,
                        color: FONT_COLOR_SCORE,
                        width: "50px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team2Sets}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ backgroundColor: BACKGROUND_TEAM_COLOR, marginY: "8px" }} />

            <Box
                sx={{
                    backgroundColor: BACKGROUND_TEAM_COLOR,
                    padding: "8px",
                }}
            >
                <Typography variant="body1" fontWeight="bold">
                    ARENA WOD BEACH TENNIS
                </Typography>
            </Box>

            <Box
                sx={{
                    padding: "8px",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Typography variant="body1" fontWeight="bold">
                    {formatTime(time)}
                </Typography>
            </Box>
        </Box>
    );
}