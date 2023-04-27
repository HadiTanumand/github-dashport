import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { supabase } from "../../client";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp(props) {


  async function singInWithGithub() {
    props.setLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  return (
    <ThemeProvider theme={theme}>
       
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 200, height: 200 }}>
            <LockOutlinedIcon sx={{width: 100, height: 100}} />
          </Avatar>
          <Typography component="h1" variant="h5">
            WellCome To Dashport-Github
          </Typography>
          <Typography sx={{color:'#757575' , pl:4 , pt:4}}>
            please click the button and sign in with your GitHub account, Then you can see your Repos
            and you can download the codes in Zip format
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <Button
              onClick={singInWithGithub}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In With Github Account
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}