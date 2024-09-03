import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

interface iSetsTable {
    team1: string;
    team2: string;
    team1Sets: teamSets;
    team2Sets: teamSets;
}

interface teamSets {
    set1: number;
    set2: number;
    set3: number;
    set4: number;
    set5: number;
}

export function SetsTable({ team1, team2, team1Sets, team2Sets }: iSetsTable) {
    const tableCellSx = {
        color: "#ffffff",
        padding: "4px 8px",
        fontSize: "16px",  // Aumenta o tamanho da fonte
        fontWeight: "bolder"
    };

    return (
        <TableContainer
            sx={{
                backgroundColor: "#9f9f9f",
                // overflow: "hidden",
                // width: "80%", 
                margin: "0 auto",
                borderRadius:2
            }}
        >
            <Table aria-label="scoreboard table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#1f1f1f" }}>
                        <TableCell sx={{ ...tableCellSx, fontSize: "1rem" }}></TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            Set 1
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            Set 2
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            Set 3
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            Set 4
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            Set 5
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ backgroundColor: "#0d0d0d" }}>
                        <TableCell component="th" scope="row" sx={tableCellSx}>
                            {team1}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team1Sets.set1}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team1Sets.set2}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team1Sets.set3}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team1Sets.set4}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team1Sets.set5}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: "#0d0d0d" }}>
                        <TableCell component="th" scope="row" sx={tableCellSx}>
                            {team2}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team2Sets.set1}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team2Sets.set2}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team2Sets.set3}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team2Sets.set4}
                        </TableCell>
                        <TableCell align="center" sx={tableCellSx}>
                            {team2Sets.set5}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
