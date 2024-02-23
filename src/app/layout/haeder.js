import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Grid } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => {
//   return {

//   };
// });

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = typeof window == "undefined" ? useScrollTrigger() : false;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// const Image = "../../../public/pantip.png";

export default function Haeder(props) {
  //   const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className="flexRow ">
            <Typography variant="h6" component="div">
              PanTip
            </Typography>
            <Typography variant="h6" component="div" className="flex">
              <div className="align">
                <HomeWorkIcon />
              </div>
              ตั้งกระทู้
            </Typography>
            <Typography variant="h6" component="div" className="flex">
              <div className="align">
                <PeopleIcon />
              </div>
              คอมมูนิตี๋
            </Typography>
            <Typography variant="h6" component="div" className="flex">
              <div className="align">
                <AccountCircleIcon />
              </div>
              เข้าสู่ระบบ
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }} className="backgroundColor">
          <Grid item={12} className="flexRow">
            <Grid item className="borderText">
              <Typography variant="h6">หน้าแรก</Typography>
            </Grid>
            <Grid item className="borderText">
              <Typography variant="h6">My Feed</Typography>
            </Grid>
            <Grid item className="borderText">
              <Typography variant="h6">Pantip Pick</Typography>
            </Grid>
            <Grid item className="borderText">
              <Typography variant="h6">Pantip Hitz</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Explore</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
