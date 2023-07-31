import { Container, Button } from "@mui/material"
import { CoreInfo, FooterSection, HeaderComponent, HeroSection, PhotoSection, SubscribeSection } from "../../Components";
// import { styled } from '@mui/material/styles';




// Define the styles object type
// interface Styles {
//     heroSection: string;
//     subscribeSection: string;
//     card: string;
//     footer: string;
// }




export const HomePage: React.FC<{}> = () => {

    // const useStyles = createTheme((theme : Theme) => ({
    //     heroSection: {
    //       backgroundColor: '#f9f9f9',
    //       padding: theme.spacing(6),
    //       textAlign: 'center',
    //     },
    //     subscribeSection: {
    //       backgroundColor: '#f6f6f6',
    //       padding: theme.spacing(6),
    //       textAlign: 'center',
    //     },
    //     card: {
    //       maxWidth: 300,
    //       margin: 'auto',
    //       marginTop: theme.spacing(3),
    //     },
    //     footer: {
    //       backgroundColor: '#333',
    //       color: '#fff',
    //       padding: theme.spacing(4),
    //       textAlign: 'center',
    //     },
    //   }));
    // Assign the type to useStyles
    // const classes: Styles = useStyles;

    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <HeaderComponent title={"Bienvenido"} description={"Degustando"}
                element={<Button fullWidth variant="contained">Login</Button>}
            />

            <>
            {/* Hero Info */}
            <HeroSection/>
               {/* Core Info */}
            <CoreInfo/>
            
            </>


            {/* Photos Section */}
        <PhotoSection/>


            {/* Subscribe Section */}
         <SubscribeSection/>


            {/* Footer Section */}
           <FooterSection/>

        </Container>

    )
}