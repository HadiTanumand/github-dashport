import React, { useEffect, useState ,useCallback} from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { supabase } from "./../../client";
import SignUp from "../signup/signup";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

const Landing = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  const checkUser = useCallback(async()=> {
    await supabase.auth.getUser();
    const Data = await supabase.auth.getSession();
    const accessToken = Data.data.session.provider_token;
    console.log(Data.data.session.provider_token);
    localStorage.setItem("accessToken_Github", accessToken);
    setLoading(false)
    history("/profile");
  } , [ history])

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
           checkUser();
           setLoading(false)
           history("/profile");
           
        });
  }, [history,checkUser ]);

  return (
    <>
    {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="success" />
        </Box>
      ) : ""}
      <SignUp setLoading={setLoading} />
    </>
  );
};

export default Landing;
