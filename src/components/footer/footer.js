import  React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/HadiTanumand">
        Hadi Tanoomand
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer() {

  return (
    <Box sx={{ bgcolor: '#e0e0e0', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          If You Like This App, Please Fallow Me in Github
        </Typography>
        <Copyright />
      </Box>
  );
}
