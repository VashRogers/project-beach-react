import { Box, Divider, Stack, Typography } from "@mui/material";

export function NewScoreboard() {
    return (
        <Box
            sx={{
                maxWidth: 600,
                backgroundColor: "#002E6D", // Cor de fundo principal
                color: "white",
                padding: "16px",
                borderRadius: "8px",
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1}>
                {/* Seção de Pontos */}
                <Box
                    sx={{
                        backgroundColor: "#A4CC2B", // Cor de fundo do ícone e pontos
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        15
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        flexGrow: 1,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        RAFINHA / NATAN
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
                        3
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ backgroundColor: "#A4CC2B", marginY: "8px" }} />

            <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                    sx={{
                        backgroundColor: "#A4CC2B",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        40
                    </Typography>
                </Box>

                <Box
                    sx={{
                        padding: "8px",
                        flexGrow: 1,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        GIOVANI / THEDY
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
                        6
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
                    00:15:32
                </Typography>
            </Box>
        </Box>
    );
}
