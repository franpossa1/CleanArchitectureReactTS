import { Box, Container, Typography, styled } from "@mui/material"
import wine_banner from "../../assets/wine_Banner.jpg";
 
export const HeroSection: React.FC<{}> = () => {
    return (
 
     <Container sx={{ mt: 9 }} maxWidth="xl">
       <div style={{ backgroundImage: `url(${wine_banner})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center"  }}>
      <Box sx={{padding:"5em",  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
             {/* Hero Section */}
     <Typography variant="h2" component="h1" gutterBottom>
       Welcome to Degustando
     </Typography>
     <Typography variant="h5" component="p" gutterBottom>
       Your place for discovering and enjoying delicious flavors.
     </Typography>
     </Box>
     </div>
   </Container>
 
    )
}
