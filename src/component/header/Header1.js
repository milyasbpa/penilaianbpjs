import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

// import tambahan
import Button from '@material-ui/core/Button';
import {
  Link 
} from 'react-router-dom';

// import module
import Navbar from './Navbar'

import {menunavbar,menulink} from './arraymenu'



function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1, 
    },
    appBar:{
        background: '#ffffff',
        // opacity:0.87
    },
    menulink:{
      color:'#000000',
      opacity:0.87,
      textDecoration:'none',
    }
  }));
  



export default function Header1(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            
            {menunavbar.map((item,index)=>{
              return (
              <Button component={Link} to={menulink[index]} className={classes.menulink}>{item}</Button>
              )
            })}
            <Navbar data={'More'} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </React.Fragment>
  );
}
