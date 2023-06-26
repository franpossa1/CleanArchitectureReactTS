import { Container, Button, Grid, Paper, Box, Typography, TextField } from "@mui/material"
import React from "react"
import { LoginModel } from "../../../Core/Models/LoginModel"

export const UserLogin: React.FC<{}> = () => {
    //Login State handle of form
    const [LoginData, setLoginData] = React.useState<LoginModel>({
        password: "", user: ""
    });
    //data handle and  update of fields
    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...LoginData, [e.target.name]: e.target.value })
    }
    //handle submit of forms
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(LoginData);
    }
    return (
        <Container maxWidth="xl">
            <Grid container direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ minHeight: "100vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h4">Iniciar Sesion</Typography>
                        <Box component={"form"} onSubmit={handleSubmit}>
                            {/*Forms to sign in the form. name needs to be the same as the property of the TS Model */}
                            <TextField onChange={dataLogin} required margin="normal" type="email" name="user"
                                fullWidth label="Correo" sx={{ mt: 2, mb: 1.5 }} />
                            <TextField type="password" onChange={dataLogin} required margin="normal" label="Contraseña" name="password"
                                fullWidth sx={{ mt: 1.5, mb: 1.5 }} />



                            <Button fullWidth type="submit" sx={{ mt: 1.5, mb: 3 }} variant="contained">Iniciar Sesion</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )
}