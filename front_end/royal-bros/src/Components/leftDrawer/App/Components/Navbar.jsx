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
import { OverlayVisible } from "../../profileDropdown";
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
      marginTop:"2.5%",
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
              <Link to='/'><img className={styles.homeLogo} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAABGCAMAAABFa97bAAABp1BMVEVHcEwZFxcaFxcZFxcaFxcLCAIaGBgYGBgZGBgZFhYPCwsaFxcVFRUYFxcAAAAYExMZGBgYFxcPDw8ZFxcTExMZFxcaGBgZFxcYFhYVFRUZFxcTDg4UERESEhIQDw8WExMVFBQZFxcZFxcaFxcZFxcZFxcUEREZFxcZFxcWFRUaFxcZFxcZFxcAAAAZFxcZFxcZFxcYFxcWFRUZFxcAAAAAAAAZFxcYFhYZFxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZFxcAAAAYFhYZFxf/yDEZFxcAAAAAAAAZFxcaGBgAAAD/xjb/xjYAAAD/yTb/xjX/xjYAAAD/xjf/xTb/xTf/xjb/xjT/yDf/xzT/xjcaGBgAAAA/MQ0jGweAYxsyJwoCAgCuhyUbFQVWQxINCgIUEAS8kSf0vTPEmCnuuDJ0WRj8wzbcqi9gSxQGBAHVpS3otDGYdiDKnSvksDAuJAmObh43KwtNPBBpURaHaRylgCMpIAihfSLRoSz4wDV4XRm0iyZvVhdbRxP/////45v/1m//yUP/7cFIWwTPAAAAXnRSTlMA37PqvQOAQMBcCeQ3rQEnoXUO9ReE+P5HK6QSMSIbUUzLj9uTeTvVb0Pwl/3e0fubVh+L/sxjaMUF9Pvs5Z6Jk3NefbnmQ365EIfFVqiCZ1nx1i9vzYDgueWzMyVA9o1nugAACPVJREFUaN7tmvlXGlkWxwuRJSguoChBBVcEMS7tVm4xmjaa6Ww93bNPvacEBfc1mkSj2XuZP3ruW6sKKButczLOOdxfauEhn/fqLt/7SkUpW9nKVrayla1s/ytTWxfnF2Yfjv7YPzM5NT3qv/8s1vD/gr44NzqFC61/dr7t1rPHZicJa+7twZvNHY3Y3unmq0/Z12wKc9W3GD6yMA2MG2dvTva0fNvaTK/k4NMff7it9D0Af3iwqVna3tpZBuPR1ltJPz+FM+fH2tW2f5DBM8O3ce2n8Ma29se2ncP9vsKvJ7zMKjtajLE01p50TgwO8ctaGJDg521wHoVjhdc7Lsd3e70dNwvaGZzb10qx7UM8W/j9O0haRUTcbO7kt/wBdqMCIQef+xJCcRVWDT51yL9Sh1DljfCfYfxeK81eYRy+Ch/dY4RqnX7Lwb7RFkTITc+icJOksT7ET+zh/wlfaqXaOr5fFF9VXMPRdjgZE0uNULDd29kExypWNOoRCpHQD3yPUB2ZYpIM6rKN31/y4mvaJzxqgU/AggxMGSKLHnXBWThOXIoOc8GpF44dCCUj/CEg5HTZxZ/E2yXjf8bT1vhKnKHWOMCLuMsH7kkPaYFHMaSEU/wR+YEdPmu2iz+Fj0rGP8JYtcYHnEEStoy45vlPy+Dz4CPfsYHg7M4AeNgEndcAQr0w37t28afxfsn4xxhbr/44nPTCsQsWX1H+9bOmvfi3uKLEMD0AHqglF2MIpRq6IR58NvFn8AcO93WF2er52n52RVr6VK9deLIo/lN3Yx1xc6ePJUZY75+1337VXiwrMUDkI4eouzfScy9xtDbwpzu2M4/w/VVdZa4c5fQLvagd4f6rEmeKejn4xyNlWdN++eU37bnSAvdFOfAikf3baCAolQgt2cSfxReF+PjswnCRE89nDT+8At/Bym4lWX3XC+3X//yu/ZNGgkgvYSRWG9wm1ezxdBAXsoe/gNM6/no6nf5Cp/HhEuMsXJ1vkIfBR7yzyPsgAyDdJAOCBDLkT2T8PxSl0VBbG2SqieuPrNce/iI+0/FfUon8Fog/7WK8Rq521uFqi43I4qhV6LamRIqBGwPDSs3fNO3vy4oKVepJAX6LoVK328P3jWzk4WvbZMEvOD4sORbJKTfls8w8kGJC1BEiIZoPl/8KrkOKrcztOv53BnzUagsfYvcoD38LgN9+FvjwGDIf6dlJEdeX+JEkS/sMDlz8z8/hmQR5njfh1ziFXCDSodEe/gJ+k4dPwvbrO46/eYiFe6XxA2t8pRfisFYsfygsim6otQA/oYs1qGVVHD/JlXfP9fCrRWRy/J33EK2ZEwjdS1IEYCqveS+zUkRw6vgqRK9f3uoERyI1FumaXuLXcWYwD9zqYbeERa8r2jI7BYkz/UY/f/mRd72ZfuUKfKrCWO7sovyqVwo2E74vKIoX86M+e/j38at8/N21jGEuK6dc7v+lyLfDbrebJ/Z6tzvG5CXkfhS/SyYRMAwNwFBwpWE4yLYz6nb3soOw2mvit+C3ZvyVD7uUnuT9XZJF12nifDlS8n5PgCf25Lfo7nnuoWUrC7SrNNeLzAM9Fg3u/WJ5x3LrhfIHv8nu0Dw+kKG7R/aldjcN+NBj0eD+gq+x0+OaAPpQz7egh249cyozzxHxm5MDM/6qpn3MTaol/8Ua4vfBRINH/Rb8D/AXPXGmifscr0v890z0CL1T7SHWI3duGzzMeiKGP0j68GS1z4H8NaxT9xgNvhv2eGQSrmXn1fqAHsNXevTgH35UCRsydeOB/EibPoTlv2T41H2+bPLQ/URCF1LTVm6afUtsgTj9iTzFWSE3errJ57VKLRzY7k2vUSWQklwhagTYXSabq/QBTtbbcxn+hOUidTDF7ySbC5b/q6ad86pL3Wf7AJsy/66ouJ3yRwYSeXq/aYzv8hDPgQVV40Ih28GHH4qJYsKtO9/7+/GJBg7zkosDyEHHG5L+9al2ejijSnyv2/24coArYdZtPa0jTXmqRZTfJrpARPIEh2+MH3RDF0eWK9TGVWqFu2siWIiv/EDIdw4O2I4scZ/zzxQ9s5pdo1J5XpH4jaLGNnB8l5hHo3Ad3p7HkAGzGi5ETSqOb9wnrGezYI+hlwrBEM3DavNSd5Hc/+qKHn0Tj7ry8H0cRuKT3ydIqpPtAlJ7IhTxzfFrUlSf+kVrQGK1sPSO5HYs6bfWp2RYCvxA/uqTFuoJ78hjMi8FSedrC19JUvw6k3gtsDkSvRZ2bmgSOX6gwuD7FL9tgPkMNLCOGjl8UBf8efhekSaXJL6f3XCZ8FuY85B9GGdvxLLMz+DPVlvLxp1xPfOkYjq+2hq9xwVnJdOQQpJBBBbHN5o5dH06vlp7B34wBeHvu0d/s7LbYgaLIxvHFq6DE0oR/Krm/B3mQb5RYgitFoFzA3xpT2mwPQ7Ri1Bfm4VwFsrebFk8p5jwHaQpItN4bMb304Cd4D+n9yOqTfxB7ovDg3RbGtRIUekzirNF6NN4VDXjN8qENmTEb5eCwdC2PtU3Sq7t+6KaG5RgT98AKbtFXza3Toq212AXeNr0sCQ+OfMz/ITH00gOQkU0ST2jd5A3yDxJmEqf6KClQoojvVkzW3Qkk/9+8eRwyizadXyWiXnmcXWKvVjSC8ZFZm5kj+jmidPnNDecLJqWrKTn4ZqJ/sPGSJ7K1/HZCweROGMS9BHZd6OPVyUe4FBt5f0x3sz7RC0h9dJrmf0z78xvE+eV4viBbvZyR+Z9aMwd9EQlGwxBf3fs8ffEdT2liwa/CAefjl8TZ1EVQN5xsia+DuNLpUJ+fCbK7176cOSZUohPMg99bzXQYsAPN4ldkUi8UIWWhC8tbChbHlbFA1TLtXvJO5lU2HrXagRv0LddexeXeGReKYIvLBQziYY+vsEPKySluTOm2MUnYztdSsTwcf1Vr6n7QS5nd7PQfM0sKtb4wa42k2ig+kYUrNauKpRyVJiK/E3xW+n7MLUjyNV/ReLqTdsF+s8leHIucKte//ti9e5H4wnfHw5seDb7cPZBRClb2cpWtrKVrWxlI/ZfwSnW9fzeMHcAAAAASUVORK5CYII=' alt='logo'/></Link>
              <Link className={styles.tarrifLink} to='/tarrif'>Tarrif</Link>
              <Link className={styles.whatsNewLink} to='/whatsNew'>What's new?</Link>
              <Link className={styles.offersLink} to='/offers'>Offers</Link>
              <Link className={styles.partnerWithUsLink} to='/partnerWithUs'>Partner with us</Link>
              <Link className={styles.searchLink} to='/search'><i class="fas fa-search"></i> Search</Link>
              <button className={styles.locationBtn}>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/location-71f31ec08c06cf6736a1d12d6381dfc5786c237acdb690006334bd670e011904.png' 
                alt='location'/> <span>location</span> <i class="fas fa-chevron-down"></i>
              </button>
              <div className={styles.profile}>
                <img 
                  src='https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png' 
                  alt='profile'
                />
                <span><OverlayVisible/></span>
                
                {/* <i class="fas fa-chevron-down"></i> */}
              </div>
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
            },
            {
              text:"Test Ride Ather 450X",
              to:'/testRideAther'
            },
            {
              text:"Adventure Tour Club",
            },
            {
              text:"Partner With Us",
              
            },
            {
              text:"Blog",
              
            },
            {
              text:"Indian Bike Routes",
              
            },
            {
              text:"Inter City Travel",
              
            },
            {
              text:"Rent From Banglore Airport",
            },
            {
              text:"About Us",
              to:"/aboutUs"
            },
            {
              text:"Terms And Conditions",
              
            },
            {
              text:"Bike Tour",
              
            },
            {
              text:"Privacy Policy",
              
            },
            {
              text:"FAQ",
              
            },
            {
              text:"Reach Us",
              to:"/reachUs"
            }
          ].map((item, index) => (
            <ListItem
              button
              onClick={() => handleRouteChange(item.to)}
              key={item.text}
            >
              <ListItemText primary={item.text} className={styles.abc}/>
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
  