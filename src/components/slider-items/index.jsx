import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
 
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import EmojiEvents from '@material-ui/icons/EmojiEvents'; 
import { useStyles } from './styles/slider-items';
import {
  Apps,
  AssignmentInd,
  Build,
  ContactMail,
 
  School,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { heroInfo } from '../../data/data';

const menuItems = [
 
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <Build />,
    listText: 'Skills',
    listPath: '/skills',
  },
  {
    listIcon: <School />,
    listText: 'Education',
    listPath: '/education',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts',
  },
    {
    listIcon: <EmojiEvents />,
    listText: 'Certifaction',
    listPath: '/certification',
  },
];

const SliderItems = ({ toggleSlide }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.menuSlide} onClick={toggleSlide}>
     <Avatar
  className={classes.myImage}
  src={process.env.PUBLIC_URL + "/images/myImage.jpg"}
  alt={heroInfo.name}
/>

      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.listPath}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SliderItems;
