import { Container, Button } from "@mui/material"
import { HeaderComponent } from "../../Components"

export const HomePage: React.FC<{}> = () => {


    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <HeaderComponent title={"Bienvenido"} description={"Degustando"}
                element={<Button fullWidth variant="contained">Login</Button>}
            />
        </Container>
    )
}