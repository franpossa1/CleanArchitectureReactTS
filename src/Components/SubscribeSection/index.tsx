import { Button, Container, Typography } from "@mui/material"

// type HeaderProps = {
//     title: string;
//     description: string;
//     element?: React.ReactNode | null;
// }
export const SubscribeSection: React.FC<{}> = () => {
    return (

        <Container >
        <Typography variant="h4" component="h2" gutterBottom>
            Subscribe to Our Plans
        </Typography>
        <Typography variant="body1" component="p">
            Join us and discover a world of flavors with our exclusive tasting plans.
        </Typography>
        <Button variant="contained" color="primary">
            Subscribe Now
        </Button>
    </Container>
    )
}
