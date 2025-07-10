import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Typed from 'react-typed';

import { heroInfo } from '../../data/data';
import HeroDetails from '../hero-details';
import { useStyles } from './styles/hero';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar
          className={classes.avater}
          src={heroInfo.image}
          alt={heroInfo.name}
        />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed
          strings={Array.isArray(heroInfo.name) ? heroInfo.name : [heroInfo.name]}
          typeSpeed={100}
        />
      </Typography>

      <br />

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={Array.isArray(heroInfo.title) ? heroInfo.title : [String(heroInfo.title)]}
          typeSpeed={70}
          backSpeed={60}
          loop
        />
      </Typography>

      <HeroDetails contacts={heroInfo.contacts} />
    </Box>
  );
};

export default Hero;
