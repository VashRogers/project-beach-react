import { Box } from "@mui/material";
import Scoreboard from "./components/scoreboard";
import "./App.css";
import ControlPanel from "./components/control-panel";
import { useState } from "react";
function App() {
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

    const [time, setTime] = useState(0);

    return (
        <Box display="flex" flexDirection="column">
            <Scoreboard
                team1={team1}
                team2={team2}
                setTeam1={setTeam1}
                setTeam2={setTeam2}
                team1Points={team1Points}
                team2Points={team2Points}
                setTeam1Points={setTeam1Points}
                setTeam2Points={setTeam2Points}
                team1Sets={team1Sets}
                team2Sets={team2Sets}
                time={time}
            />
            <ControlPanel
                team1={team1}
                team2={team2}
                setTeam1={setTeam1}
                setTeam2={setTeam2}
                team1Points={team1Points}
                setTeam1Points={setTeam1Points}
                team2Points={team2Points}
                setTeam2Points={setTeam2Points}
                team1Sets={team1Sets}
                team2Sets={team2Sets}
                setTeam1Sets={setTeam1Sets}
                setTeam2Sets={setTeam2Sets}
                time={time}
                setTime={setTime}
            />
        </Box>
    );
}

export default App;
