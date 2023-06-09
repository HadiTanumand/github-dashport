import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Repos = (props) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: 3 
          }}
        >
          <CardContent sx={{ flexGrow: 1  }}>
            <Typography gutterBottom variant="h5" component="h6" sx={{ fontSize: 16}}>
              Repo Detail:
            </Typography>
            <Typography gutterBottom variant="h5" component="h6" sx={{ fontSize: 22 , color: 'success.main'}}>
              {props.name}
            </Typography>
            <Typography sx={{ color: 'warning.main' }}>{props.visibility}</Typography>
          </CardContent>
          <CardActions>
            <Link
              sx={{ bgcolor: "#536dfe", padding: 0.5, borderRadius: 1.5 ,boxShadow: 3, color: 'white' }}
              href={`https://api.github.com/repos/${props.ownerurl}/${props.name}/zipball`}
            >
              Download Zip
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Repos;
