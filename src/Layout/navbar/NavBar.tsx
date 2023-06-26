import { Box, AppBar, Toolbar, Container, Grid, Button, Stack, Typography } from "@mui/material"

export const NavBar: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent={"space-between"}
                            alignItems={"center"}>
                            <Grid item> 
                            <Typography>Degustando</Typography> </Grid>
                            <Grid item>
                                <Stack spacing={2} direction={"row"}>

                                    <Button variant={"outlined"}>Iniciar Sesion</Button>
                                    <Button variant={"outlined"}>Registrarse</Button>

                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>

    )
}