import { Card, CardMedia, Container, Grid } from "@mui/material"
import wine_photo from "../../assets/wine_photo.jpg";
// type HeaderProps = {
//     title: string;
//     description: string;
//     element?: React.ReactNode | null;
// }
export const PhotoSection: React.FC<{}> = () => {
    return (

        <Container  sx={{ mt: 6 }} maxWidth="xl" >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card  >
                            <CardMedia
                                component="img"
                                height="200"
                                image={wine_photo} // Replace with actual image path
                                alt="Photo 1"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card  >
                            <CardMedia
                                component="img"
                                height="200"
                                image={wine_photo} // Replace with actual image path
                                alt="Photo 2"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card  >
                            <CardMedia
                                component="img"
                                height="200"
                                image={wine_photo} // Replace with actual image path
                                alt="Photo 3"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
    )
}
