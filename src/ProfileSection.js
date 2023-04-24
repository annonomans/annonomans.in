import React from 'react';
import { Icon, Card, Typography, List, ListItem, ListItemIcon, ListItemText, CardMedia, makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import { flexbox, height, width } from '@material-ui/system';
import ruby from './ruby.png';
import rails from './rails.png';
import javasctipt from './javascript.png'
import logo from './logo.svg'
import education from './education.png'
import skills from './skills.png'
import educationUni from './educationUni.png'
import databases from './database-storage.png'
import rspec from './rspec.png'
import sidekiq from './sidekiq.png'
import docker from './docker.png'
import git from './merge.png'
import bg from './bg.jpg'

const useStyles = makeStyles({
  card: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundImage: `url(${bg})`,
    backgroundPositionY: "center",
    backgroundSize: "cover"
  },
  heading: {
    marginBottom: '1rem',
    fontWeight: "900",
    lineHeight: "2.235"
  },
  icon: {
    marginRight: '0.5rem',
  },
  media: {
    height: '200px',
  },
});

const ProfileSection = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <div style={{display: "flex"}}>
        <img style={{width:"50px", height:"50px", margin: "10px"}} src={education} />
        <Typography variant="h4" className={classes.heading}>
            {/* <Icon className={classes.icon}> */}
            {/* </Icon> */}
            Education
        </Typography>
        </div>
      <List>
        <ListItem>
            <img style={{width:"20px", height:"20px", margin: "10px"}} src={educationUni} />
          <ListItemText primary="Masters in Computer Application" secondary="Indira Gandhi National Open University" />
        </ListItem>
        <ListItem>
          <img style={{width:"20px", height:"20px", margin: "10px"}} src={educationUni} />
          <ListItemText primary="Bachelors in Computer Application" secondary="University of Lucknow" />
        </ListItem>
      </List>
      <div style={{display: "flex"}}>
        <img style={{width:"40px", height:"40px", margin: "10px"}} src={skills} />
        <Typography variant="h4" className={classes.heading}>
            Skills
        </Typography>
      </div>
      <List style={{display: "flex", flexDirection: "column"}}>
        <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={ruby} />
          <ListItemText primary="Ruby" secondary="Advanced" />          
        </ListItem>
        <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={rails} />
          <ListItemText primary="Rails" secondary="Advanced" />
        </ListItem>
        <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={javasctipt} />
          <ListItemText primary="JavaScript" secondary="Proficient" />
        </ListItem>
        <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={logo} />
          <ListItemText primary="React" secondary="Proficient" />
          {/* <CardMedia className={classes.media} image="https://via.placeholder.com/200" /> */}
        </ListItem>
         <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={rspec} />
          <ListItemText primary="Rspec" secondary="Proficient" />
         </ListItem>
         <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={sidekiq} />
          <ListItemText primary="Sidekiq" secondary="Proficient" />
         </ListItem>
         <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={git} />
          <ListItemText primary="Git" secondary="Proficient" />
         </ListItem>
         <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={databases} />
          <ListItemText primary="Databases[MySql, Postgres]" secondary="Proficient" />
         </ListItem>
         <ListItem>
          <img style={{width:"40px", height:"40px", margin: "10px"}} src={docker} />
          <ListItemText primary="Docker" secondary="Proficient" />
         </ListItem>
      </List>
    </Card>
  );
  
}

export default ProfileSection;
