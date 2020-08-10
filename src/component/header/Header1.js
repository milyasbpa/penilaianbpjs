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

// import {menunavbar,menulink} from './arraymenu'
import {menulinkkom} from './arraymenu'



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
        height:'40px',
        justifyContent:'center',       
    },
    menulink:{
      color:'#000000',
      opacity:0.87,
      textDecoration:'none',
      textTransform:'none',
    }
  }));
  

  // const aplikasi=[
  //   'HFIS',
  //   'Antrean Online',
  //   'Apotek Online',
  //   'Keuangan',
  //   'New-In Monica',
  //   'Iuran Wajib',
  //   'Wasrik',
  //   'Kepesertaan',
  //   'RBU',
  //   'e-Dabu',
  //   'SIPP',
  //   'CSTI',
  //   'Mobile JKN',
  // ]

  const aplikasi2=[
    'BOA',
    'LUPIS',
    'Pcare',
    'Vclaim',
    'VD',
    'HFIS',
    'Antrean Online',
    'Apotek Online',
    'Keuangan',
    'New-In Monica',
    'Iuran Wajib',
    'Wasrik',
    'Kepesertaan',
    'RBU',
    'e-Dabu',
    'SIPP',
    'CSTI',
    'Mobile JKN',
  ]

export default function Header1(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <HideOnScroll {...props} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            
            {/* {menunavbar.map((item,index)=>{
              return (
              <Button component={Link} to={menulink[index]} className={classes.menulink}>{item}</Button>
              )
            })} */}
            {/* <Navbar judul={'More'} aplikasi={aplikasi}/> */}
            <Button component={Link} to={'/penilaianbpjs'} className={classes.menulink}>Home</Button>
            <Navbar judul={'Aplikasi'} aplikasi={aplikasi2} pagination={menulinkkom}  />

          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </React.Fragment>
  );
}
