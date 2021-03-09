import {
    AppBar,
    IconButton,
    Toolbar,
    Drawer,
    Divider,
    ListItem,
    ListItemText,
  } from "@material-ui/core";
  import styles from './Navbar.module.css';
  import clsx from "clsx";
  import React from "react";
  import MenuIcon from "@material-ui/icons/Menu";
  import { makeStyles } from "@material-ui/core/styles";
  import { Link, useHistory } from "react-router-dom";
  const drawerWidth = 240;
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    navTitle: {
      padding: 5
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      color:'black'
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop:"3%",
      justifyContent: "center"
    },
    hide: {
      display: "none"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flex: 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  }));
  
  function Navbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const handleDrawerToggle = () => {
      setOpen(!open);
    };
  
    const handleRouteChange = (to) => {
      history.push(to);
    };
  
    return (
      <div className={classes.root}>
        <div className={styles.navParent}>
          <AppBar
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar className={styles.navbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Link>tarrif</Link>
                <Link>whats new ?</Link>
                <Link>offers</Link>
                <Link>partner with us</Link>
                <Link>search</Link>
                <Link>city</Link>
              {/* <div className={styles.navbarLinks}>
                
            </div> */}
            </Toolbar>
            
          </AppBar>
        </div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}></div>
          <Divider />
          {[
            {
              text: "Tarrif",
              to: "/tarrif"
            },
            {
              text: "RoyalbrothersX",
              to: "/royalbrothersX"
            }
          ].map((item, index) => (
            <ListItem
              button
              onClick={() => handleRouteChange(item.to)}
              key={item.text}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {props.children}
        </main>
      </div>
    );
  }
  
  export { Navbar };
  