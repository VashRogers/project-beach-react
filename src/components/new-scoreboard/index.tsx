import { Box, Divider, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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

    // Função auxiliar para determinar estilo de quem está servindo
    const isServing = (team: string) => servingTeam === team ? "#FFD700" : "transparent"; // Cor de borda dourada para quem serve
    
    return (
        <Box
            sx={{
                maxWidth: 600,
                backgroundColor: "#002E6D",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
            }}
        >
            {/* Rótulos para Pontos e Sets */}
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
                        backgroundColor: "#A4CC2B",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        border: `2px solid ${isServing(team1)}`, // Borda para indicar quem está servindo
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
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team1}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        backgroundColor: "#FFFFFF",
                        color: "#002E6D",
                        width: "50px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team1Sets}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ backgroundColor: "#A4CC2B", marginY: "8px" }} />

            <Stack direction="row" alignItems="center" spacing={1}>
                {/* Seção de Pontos - Time 2 */}
                <Box
                    sx={{
                        backgroundColor: "#A4CC2B",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        border: `2px solid ${isServing(team2)}`, // Borda para indicar quem está servindo
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
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team2}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        backgroundColor: "#FFFFFF",
                        color: "#002E6D",
                        width: "50px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        {team2Sets}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ backgroundColor: "#A4CC2B", marginY: "8px" }} />

            <Box
                sx={{
                    backgroundColor: "#A4CC2B",
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
