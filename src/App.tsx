import { Box } from "@mui/material";
import Scoreboard from "./components/scoreboard";
import "./App.css";
function App() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            // bgcolor={customColors.background}
            // flexGrow={1}
            // margin={-1}
            // height="100vh"
            // width="100vm"
            // justifyContent="center"
        >
            <Scoreboard />
        </Box>
    );
}

export default App;
