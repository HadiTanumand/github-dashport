import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

const ProfileHead = (props) => {
  return (
    <>
    <Box
    sx={{
      bgcolor: "background.paper",
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">
      <Avatar
      src={props.user.avatar_url}
        sx={{
          boxShadow: 6,
          m: 2,
          bgcolor: "secondary.main",
          width: 200,
          height: 200,
        }}
      ></Avatar>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {props.user.name}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
      >
        {props.user.email}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="red"
        paragraph
      >
        please Click on the Get Repositories Button and See the Repositories
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="outlined" onClick={props.handleLogout}>
          Log Out
        </Button>
        <Button variant="contained" onClick={props.getRepositories}>
          Get Repositories
        </Button>
      </Stack>
    </Container>
  </Box>
    </>
    
  );
};

export default ProfileHead;