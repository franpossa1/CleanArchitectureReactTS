import { Container, Typography } from "@mui/material"

// type HeaderProps = {
//     title: string;
//     description: string;
//     element?: React.ReactNode | null;
// }
export const FooterSection: React.FC<{}> = () => {
    return (

        <Container  >
        <Typography variant="h5" component="h3" gutterBottom>
            Important Links
        </Typography>
        {/* Placeholder links */}
        <Typography variant="body1" component="p">
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </Typography>
    </Container>
    )
}
