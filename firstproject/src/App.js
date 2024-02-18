
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, Collapse } from '@material-ui/core';
import { HomeOutlined, RssFeedOutlined, AssignmentOutlined, WorkOutlined, FormatListNumberedOutlined, ExitToAppOutlined, CheckCircleOutline } from '@material-ui/icons';
import logo from './Group 2.png';

const iconMapping = {
  Home: <HomeOutlined />,
  Feed: <RssFeedOutlined />,
  Reports: <AssignmentOutlined />,
  Projects: <WorkOutlined />,
  Tasks: <FormatListNumberedOutlined />,
  Logout: <ExitToAppOutlined />,
  Milestones: <CheckCircleOutline />
};

const useStyles = makeStyles({
  list: {
    width: 250,
    background: 'linear-gradient(179.66deg, #01DCBA -0.77%, #7D32CB 98.56%, #7F30CB 98.57%)',
    color: 'white',
    height: '100vh',
    padding: 10
  },
  line: {
    border: '1px solid lightgray',
    margin: '10px 0',
  },
  logoutText: {
    color: 'red',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
});

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const handleMenuToggle = (menu) => {
    setOpenMenus({
      ...openMenus,
      [menu]: !openMenus[menu]
    });
  };

  const handleLogout = () => {
    setOpen(false); // Close the sidebar when logout is clicked
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Sidebar</button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className={classes.list}>
          <img src={logo} alt="Cavin Infotech" />
          <hr className={classes.line} />
          <List>
            <ListItem button onClick={() => handleMenuToggle('mainMenu')}>
              Main Menu
            </ListItem>
            <Collapse in={openMenus.mainMenu}>
              <List>
                <ListItem button>{iconMapping['Home']} Home</ListItem>
                <ListItem button>{iconMapping['Feed']} Feed</ListItem>
                <ListItem button>{iconMapping['Reports']} Reports</ListItem>
                <ListItem button>{iconMapping['Projects']} Projects</ListItem>
              </List>
            </Collapse>
            <hr className={classes.line} />
            <ListItem button onClick={() => handleMenuToggle('overview')}>
              Overview
            </ListItem>
            <Collapse in={openMenus.overview}>
              <List>
                <ListItem button>
                  {iconMapping['Tasks']} Tasks
                </ListItem>
                <ListItem button>
                  {iconMapping['Milestones']} Milestones
                </ListItem>
              </List>
            </Collapse>
          </List>
          <p className={classes.logoutText} onClick={handleLogout}>
            {iconMapping['Logout']} Logout
          </p>
        </div>
      </Drawer>
    </div>
  );
}