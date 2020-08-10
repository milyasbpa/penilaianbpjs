import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MenuItem from '@material-ui/core/MenuItem';

import { 
    Link 
  } from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display:'flex',
    // flexDirection:'start',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  
  },
  tabslabel:{
      textTransform:'none',
      textAlign:'left',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      alignContent:'flex-start'
  },
  menujudul:{
    fontSize:14,
    fontWeight:'bold',
    textAlign:'left'
  },
  menusubjudul:{
    fontSize:12,
    textAlign:'left'
  },
  menuitemlabel:{
      fontSize:14,
  },
}));

// const menulist=[
//     'Profil Responden Internal',
//     'Data Quality in Use Internal',
//     'Profil Responden Eksternal',
//     'Data Quality in Use Eksternal',
// ]

const menujudul=[
    'Internal',
    'Eksternal',
]
const menusub=[
    'Profil Responden',
    'Data Quality in Use'
]

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const aplikasi=props.aplikasi;
  const pagination=props.pagination;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {aplikasi.map((item,index)=> {return(
            <Tab label={item} {...a11yProps(index)} className={classes.tabslabel}/>
        )}
        )}
        {/* <Tab label="Pcare" {...a11yProps(0)} className={classes.tabslabel}/>
        <Tab label="Vclaim" {...a11yProps(1)} className={classes.tabslabel}/>
        <Tab label="Verifikasi Digital" {...a11yProps(2)} className={classes.tabslabel}/>
        <Tab label="Keuangan" {...a11yProps(3)} className={classes.tabslabel}/>
        <Tab label="Kepesertaan" {...a11yProps(4)} className={classes.tabslabel}/>
        <Tab label="e-Dabu" {...a11yProps(5)} className={classes.tabslabel}/>
        <Tab label="Mobile JKN" {...a11yProps(6)} className={classes.tabslabel}/> */}
      </Tabs>
      {/* {aplikasi.map((item,index)=> {return(
          <TabPanel value={value} index={index}>
          {menulist.map(item1 => {return (
              <MenuItem className={classes.menuitemlabel} component={Link} to={pagination[index]}>
                  {item1}
              </MenuItem>
          )})}
          
          
        </TabPanel>
      )})} */}

        {aplikasi.map((item,index)=> {return(
          <TabPanel value={value} index={index}>
          {menujudul.map((item1,index1) => {return (
              <Typography className={classes.menujudul} >
                  {item1}
                  {menusub.map((item2,index2) => {return(
                      <MenuItem className={classes.menusubjudul} component={Link} to={pagination[index*4+index1*2+index2]}>
                        {item2}
                     </MenuItem>
                  )})}
              </Typography>
              
          )})}
          
          {/* <MenuItem>Data Quality in Use Internal</MenuItem>
          <MenuItem>Profil Responden Eksternal</MenuItem>
          <MenuItem>Data Quality in Use Eksternal</MenuItem> */}
        </TabPanel>
      )})}

      
      
    
    </div>
  );
}
