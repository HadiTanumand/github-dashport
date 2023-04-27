import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { supabase } from "./../../client";
import SignIn from "../signup/signup";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

const Landing = () => {
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
           checkUser();
           setLoading(false)
           history("/profile");
           
        });
  }, []);

  async function checkUser() {
    const user = await supabase.auth.getUser();
    // console.log(user.data.user.user_metadata.user_name);
    setUser(user);
    const Data = await supabase.auth.getSession();
    const accessToken = Data.data.session.provider_token;
    console.log(Data.data.session.provider_token);
    localStorage.setItem("accessToken_Github", accessToken);
    setLoading(false)
    history("/profile");
  }

  return (
    <>
    {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="success" />
        </Box>
      ) : ""}
      <SignIn setLoading={setLoading} />
    </>
  );
};

export default Landing;
