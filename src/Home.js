import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Code as CodeIcon,
} from "@material-ui/icons";
import { Code, Extension } from "@material-ui/icons";
import ProfileSection from './ProfileSection';
import QRCodeGenerator from "./QRCodeGenerator";

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   },
//   toolbar: theme.mixins.toolbar,
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     margin: "0 auto",
//     marginBottom: theme.spacing(3),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    }
  },
  toolbar: theme.mixins.toolbar,
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "0 auto",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      marginBottom: theme.spacing(1),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [selectedSection, setSelectedSection] = useState("About");

  const handleListItemClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.toolbar}  style={{marginTop: "20px"}}>
          <Avatar
            alt="Software Engineer"
            src="https://pbs.twimg.com/profile_images/1280361976405753856/-TG7wj14_400x400.jpg"
            className={classes.large}
          />
          {/* <Typography variant="h6" align="center">
           Hi, I'm Noman Ahmad,
           Full-Stack Developer,
           Ruby & React
          </Typography> */}
          <Typography variant="h6" align="center">
                Hi, I'm Noman Ahmad,
                Full-Stack Developer,
                Rails & React
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem
            button
            selected={selectedSection === "About"}
            onClick={() => handleListItemClick("About")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            selected={selectedSection === "profile"}
            onClick={() => handleListItemClick("profile")}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            selected={selectedSection === "projects"}
            onClick={() => handleListItemClick("projects")}
          >
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
        <QRCodeGenerator/>
      </Drawer>
      <main className={classes.content}>
        <Box className={classes.toolbar} />
        {/* <Typography variant="h4">{selectedSection}</Typography> */}
        {selectedSection === "About" && (
        //   <Typography variant="body1">
        //     As a full stack developer with expertise in Rails and React frameworks, I specialize in building web applications with a focus on delivering clean, maintainable, and scalable code. I bring a strong foundation in backend development using Ruby on Rails, as well as proficiency in front-end development using React, HTML, CSS, and JavaScript. With experience in working in Agile environments, I have a proven track record of delivering high-quality software on time and within budget.
        //   </Typography>

        // <Typography variant="body1" component="p" gutterBottom style={{marginTop: "50px", fontSize: "50px"}}>
        // <span style={{ fontFamily: "Roboto", fontWeight: 900 }}>
        //     As a full stack developer with expertise in{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#f8e71c", color: "#1d1d1d" }}>
        //     Rails and React frameworks
        //     </span>
        //     , I specialize in building web applications with a focus on delivering{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#44af69", color: "#fff" }}>
        //     clean, maintainable, and scalable code
        //     </span>
        //     . I bring a strong foundation in backend development using{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#3d9970", color: "#fff" }}>
        //     Ruby on Rails
        //     </span>
        //     , as well as proficiency in front-end development using{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#0074d9", color: "#fff" }}>
        //     React, HTML, CSS, and JavaScript
        //     </span>
        //     . With experience in working in{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#f0134d", color: "#fff" }}>
        //     Agile environments
        //     </span>
        //     , I have a{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#a901db", color: "#fff" }}>
        //     proven track record
        //     </span>{" "}
        //     of delivering high-quality software{" "}
        //     <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#ff4136", color: "#fff" }}>
        //     on time and within budget
        //     </span>
        //     .
        // </span>
        // </Typography>

        <Typography variant="body1" component="p" gutterBottom style={{ fontSize: "50px"}}>
            <span style={{ fontFamily: "Roboto"  }}>
                As a full stack developer with expertise in{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#f8e71c", color: "#1d1d1d" }}>
                Rails and React frameworks
                </span>
                , I specialize in building web applications with a focus on delivering{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#44af69", color: "#fff" }}>
                clean, maintainable, and scalable code
                </span>
                . I bring a strong foundation in backend development using{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#3d9970", color: "#fff" }}>
                Ruby on Rails, Postgres database, and Sidekiq
                </span>
                , as well as proficiency in front-end development using{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#0074d9", color: "#fff" }}>
                React, HTML, CSS, and JavaScript
                </span>
                . With experience in working in{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#f0134d", color: "#fff" }}>
                Agile environments
                </span>
                <span>
                {" "} and I also have experience in using ,
                </span>
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor:  "#f8e71c", color: "#fff" }}>
                {" "} RSpec 
                </span>
                <span> {" "} for testing and deploying applications using {" "}</span> 
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor:  "#f8e71c", color: "#fff" }}>
                {" "} Docker and GitHub CI/CD.  
                </span>  
                {" "} I have a{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#a901db", color: "#fff" }}>
                proven track record
                </span>{" "}
                of delivering high-quality software{" "}
                <span style={{ fontFamily: "Roboto", fontWeight: 900, backgroundColor: "#ff4136", color: "#fff" }}>
                on time and within budget.
                </span>
                
            </span>
        </Typography>

        )}
        {selectedSection === "profile" && (
          // <Typography variant="body1">
          //   This is the Profile section.
          // </Typography>
          <ProfileSection />
        )}
        {selectedSection === "projects" && (
          <Typography variant="body1">
            This is the Projects section.
          </Typography>
        )}
      </main>
    </div>
  );
};

export default Home;
