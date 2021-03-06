import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Logo from "../../Image/Logo new.png"
import "./Navbar.css"
import YoutubeGif from "../../Image/icons8-youtube.gif";
import FacebookGif from "../../Image/icons8-facebook-circled.gif";
import InstaGif from "../../Image/icons8-instagram.gif"
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  color:{
    backgroundColor: 'white'

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color : 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      color:"black",
      
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"black",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '300%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  

  const HandleYoutube = () => {
    window.location.href = "https://www.youtube.com/channel/UCOfj-QsVDrHwbGmDXY2g0Rg";
  };







  return (
    <Router>
    <div className={classes.grow}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <img className="logoImage"  src={Logo}></img>
          <Typography className={classes.title} variant="h6" noWrap >
            Shubh InfoTech
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} /> 
          <img className="Youtubegif" src={YoutubeGif} onClick={() => HandleYoutube()}/>
          <img className="facebookgif" src={FacebookGif}/>
          <img className="instagif" src={InstaGif}/>
        </Toolbar>
      </AppBar>
    </div>
    </Router>
  );
}
