import React, { useState , useEffect } from "react";
import Alert from '@mui/material/Alert';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { supabase } from "./../../client";
import { useNavigate } from "react-router-dom";
import Repos from "../repos/repos";
import ProfileHead from "../profileHead/profileHead";
import axios from "axios";

export default function Album() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    avatar_url:'',
    name:'',
    email:'',

  });

  useEffect(() => {
      checkUser();
  }, []);

  const history = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("accessToken_Github");
    history("/");
  };

  async function checkUser() {
    const user = await supabase.auth.getUser();
   const newUser = user.data.user.user_metadata;
    setUser(newUser);
  }

  async function getRepositories() {
    setLoading(true)
    setError(false)
    const accessToken = localStorage.getItem("accessToken_Github");
    axios
      .get("user/repos", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((e) => {
        setRepos(e.data);
        setLoading(false)
      })
      .catch((r) =>{
        setError(true);
        setLoading(false)
      }
       );
  }
  return (
      <>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="success" />
        </Box>
      ) : ""}
      {
        error  ?  <Alert severity="error">request Error please Reload the page and check your Internet!</Alert> :
        ""
      }
      <main>    
        <ProfileHead
        user={user}
        getRepositories={getRepositories}
         handleLogout={handleLogout} />
        <Container sx={{ py: 8 }} maxWidth="md">       
          <Grid container spacing={4}>           
            {repos.map((repo) => (
              <Repos
              name={repo.name}
              id={repo.id}
              visibility={repo.visibility}
              forks={repo.forks}
              ownerurl={repo.owner.login}
              />
            ))}
          </Grid>        
        </Container>
      </main>
      </>
      
  );
}
