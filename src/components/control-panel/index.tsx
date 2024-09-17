import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { TeamField } from "./components/TeamField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface iControlPanelProps {
    team1: string;
    team2: string;
    setTeam1: Dispatch<SetStateAction<string>>;
    setTeam2: Dispatch<SetStateAction<string>>;
    team1Points: string;
    setTeam1Points: Dispatch<SetStateAction<string>>;
    team1Sets: number;
    setTeam1Sets: Dispatch<SetStateAction<number>>;
    team2Points: string;
    setTeam2Points: Dispatch<SetStateAction<string>>;
    team2Sets: number;
    setTeam2Sets: Dispatch<SetStateAction<number>>;
    time: number;
    setTime: Dispatch<SetStateAction<number>>;
    servingTeam: string;
    setServingTeam: Dispatch<SetStateAction<string>>;
}

export default function ControlPanel({
    team1,
    team2,
    setTeam1,
    setTeam2,
    team1Points,
    setTeam1Points,
    team1Sets,
    setTeam1Sets,
    team2Points,
    setTeam2Points,
    team2Sets,
    setTeam2Sets,
    time,
    setTime,
    servingTeam,
    setServingTeam,
}: iControlPanelProps) {
    const [team1Advantage, setTeam1Advantage] = useState(false);
    const [team2Advantage, setTeam2Advantage] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined; // Inicializando com undefined
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0 && timer !== undefined) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    useEffect(() => {
        if (team1Points === "40" && team2Points === "40") {
            alert("Deuce");
        }
    }, [team1Points, team2Points]);

    const handleTeam1Points = () => {
        if (team1Points === "40" && team2Points === "40") {
            if (team1Advantage) {
                handleTeam1WinSet();
            } else if (team2Advantage) {
                setTeam2Advantage(false);
            } else {
                setTeam1Advantage(true);
            }
        } else {
            switch (team1Points) {
                case "00":
                    setTeam1Points("15");
                    break;
                case "15":
                    setTeam1Points("30");
                    break;
                case "30":
                    setTeam1Points("40");
                    break;
                case "40":
                    handleTeam1WinSet();
                    break;
                default:
                    setTeam1Points("00");
            }
        }
    };

    const handleRemoveTeam1Points = () => {
        switch (team1Points) {
            case "40":
                setTeam1Points("30");
                break;
            case "30":
                setTeam1Points("15");
                break;
            case "15":
                setTeam1Points("00");
                break;
            default:
                setTeam1Points("00");
        }
    };

    const handleTeam2Points = () => {
        if (team2Points === "40" && team1Points === "40") {
            if (team2Advantage) {
                handleTeam2WinSet();
            } else if (team1Advantage) {
                setTeam1Advantage(false);
            } else {
                setTeam2Advantage(true);
            }
        } else {
            switch (team2Points) {
                case "00":
                    setTeam2Points("15");
                    break;
                case "15":
                    setTeam2Points("30");
                    break;
                case "30":
                    setTeam2Points("40");
                    break;
                case "40":
                    handleTeam2WinSet();
                    break;
                default:
                    setTeam2Points("00");
            }
        }
    };

    const handleRemoveTeam2Points = () => {
        switch (team2Points) {
            case "40":
                setTeam2Points("30");
                break;
            case "30":
                setTeam2Points("15");
                break;
            case "15":
                setTeam2Points("00");
                break;
            default:
                setTeam2Points("00");
        }
    };

    const handleTeam1WinSet = () => {
        setTeam1Sets((prevSets) => prevSets + 1);
        resetPointsAndAdvantage();
    };

    const handleTeam2WinSet = () => {
        setTeam2Sets((prevSets) => prevSets + 1);
        resetPointsAndAdvantage();
    };

    const resetPointsAndAdvantage = () => {
        setTeam1Points("00");
        setTeam2Points("00");
        setTeam1Advantage(false);
        setTeam2Advantage(false);
    };

    const resetAll = () => {
        resetPointsAndAdvantage();
        setTeam1Sets(0);
        setTeam2Sets(0);
    };

    return (
        <Box display="flex" margin={2}>
            <Paper sx={{ flexGrow: 1, justifyContent: "center" }}>
                <Typography variant="h6" gutterBottom textAlign="center">
                    Controle
                </Typography>
                <Box display="flex" flexGrow={1} p={2}>
                    <Stack
                        flexDirection={{ xs: "column", md: "row" }}
                        flexGrow={1}
                        p={1}
                    >
                        <Stack flexGrow={1}>
                            <TeamField
                                team={team1}
                                teamLabel="TIME 1"
                                setTeam={setTeam1}
                            />

                            <Stack
                                flexDirection="row"
                                margin={1}
                                p={1}
                                justifyContent="space-around"
                            >
                                <Button
                                    onClick={handleRemoveTeam1Points}
                                    variant="contained"
                                    startIcon={<RemoveCircleIcon />}
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    color="error"
                                >
                                    Rmv. Pontos
                                </Button>

                                <Button
                                    onClick={handleTeam1Points}
                                    variant="contained"
                                    startIcon={<AddCircleIcon />}
                                    sx={{
                                        backgroundColor: "#005a03",
                                        borderRadius: 5,
                                    }}
                                >
                                    Adc. Pontos
                                </Button>

                                <Button
                                    onClick={() => setServingTeam("team1")} // Definir time 1 com saque
                                    variant={
                                        servingTeam === "team1"
                                            ? "contained"
                                            : "outlined"
                                    }
                                    color="primary"
                                >
                                    Saque TIME 1
                                </Button>
                            </Stack>
                        </Stack>

                        <Stack justifyContent="center">
                            <Button
                                onClick={resetAll}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#e69200",
                                    borderRadius: 5,
                                    margin: 2,
                                }}
                            >
                                Resetar Pontos e Sets
                            </Button>
                            {/* Controles do Relógio */}
                            <Stack
                                flexDirection="row"
                                margin={1}
                                p={1}
                                justifyContent="space-around"
                            >
                                <Button
                                    onClick={handleStart}
                                    variant="contained"
                                    color="success"
                                    sx={{ margin: 1 }}
                                >
                                    <PlayArrowIcon />
                                </Button>
                                <Button
                                    onClick={handlePause}
                                    variant="contained"
                                    color="warning"
                                    sx={{ margin: 1 }}
                                >
                                    <PauseIcon />
                                </Button>
                                <Button
                                    onClick={handleReset}
                                    variant="contained"
                                    color="error"
                                    sx={{ margin: 1 }}
                                >
                                    Resetar
                                </Button>
                            </Stack>
                        </Stack>

                        <Stack flexGrow={1}>
                            <TeamField
                                team={team2}
                                teamLabel="TIME 2"
                                setTeam={setTeam2}
                            />

                            <Stack
                                flexDirection="row"
                                margin={1}
                                p={1}
                                justifyContent="space-around"
                            >
                                <Button
                                    onClick={handleRemoveTeam2Points}
                                    variant="contained"
                                    startIcon={<RemoveCircleIcon />}
                                    sx={{
                                        borderRadius: 5,
                                    }}
                                    color="error"
                                >
                                    Rmv. Pontos
                                </Button>

                                <Button
                                    onClick={handleTeam2Points}
                                    variant="contained"
                                    startIcon={<AddCircleIcon />}
                                    sx={{
                                        backgroundColor: "#005a03",
                                        borderRadius: 5,
                                    }}
                                >
                                    Adc. Pontos
                                </Button>

                                <Button
                                    onClick={() => setServingTeam("team2")} // Definir time 2 com saque
                                    variant={
                                        servingTeam === "team2"
                                            ? "contained"
                                            : "outlined"
                                    }
                                    color="primary"
                                >
                                    Saque TIME 2
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
