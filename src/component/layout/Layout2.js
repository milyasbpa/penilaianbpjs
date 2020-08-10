import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import {datatotalgrafik} from '../DataChart'

import Responsive from '../Responsive'
import Filter from '../Filter';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    maxWidth:'1280px',
    margin:'80px auto'
  },
  appBar:{
    background: '#ffffff',
    // opacity:0.87
},
}));

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const tabmenu=['Hasil QiU Eksternal','Hasil QiU Internal']


export default function Layout2(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      

        {/* <AntTabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {tabmenu.map((item,index) => { return (
              <AntTab label={item} {...a11yProps(index)} />
          )
          })}
        </AntTabs> 

        {tabmenu.map((item,index) => {
          return (
            <TabPanel value={value} index={index}>
            {props.jsontotal[index]["Sheet1"].length > 2 ? 
              <Fragment>
                <Responsive datatotalgrafik={props.datatotal[index]}/>
                <Filter jsontotal={props.jsontotal[index]}/> 
              </Fragment>
              :
              <Typography fontWeight="fontWeightMedium" fontSize={12}>Tidak ada data</Typography>
            }
            </TabPanel>
          )
          
          // if (props.jsontotal["Sheet1"].length > 2) {
          //   return (
          //     <TabPanel value={value} index={index}>    
          //           <Responsive datatotalgrafik={props.datatotal}/>
          //           <Filter jsontotal={props.jsontotal}/>
          //       </TabPanel>
          //   )
          // } else {
          //   return (
          //     <Typography fontWeight="fontWeightMedium" fontSize={12}>Tidak ada data</Typography>
          //   )
          // }
        })}
         */}
    </div>
  );
}
