import { Container, Grid, Typography } from "@mui/material"

// type HeaderProps = {
//     title: string;
//     description: string;
//     element?: React.ReactNode | null;
// }
export const CoreInfo: React.FC<{}> = () => {
    return (


    <Container sx={{ mt: 6 }} maxWidth="xl">
            {/* Generic Info */}
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h2" gutterBottom>
                Discover New Tastes
            </Typography>
            <Typography variant="body1" component="p">
                Explore a wide range of flavors and cuisines from around the world.
                Whether you're a food enthusiast or a professional chef, you'll find
                something exciting to taste here.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h2" gutterBottom>
                Share Your Expertise
            </Typography>
            <Typography variant="body1" component="p">
                Are you a sommelier or a culinary expert? Share your knowledge and
                passion with others by hosting tastings and workshops. Connect with
                food lovers and create unforgettable experiences.
            </Typography>
        </Grid>
    </Grid>
</Container>
    )
}
