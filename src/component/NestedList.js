import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth:150,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listitems:{
      maxHeight:'150px',
      overflowY:'scroll'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  tulisanjudul:{
      fontSize:'14px',
    //   fontWeight:'bold',
  },
  tulisanisi:{
    fontSize:'13px',
},
}));



export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const judulfilter=props.judulfilter;
  const isifilter=props.isifilter;
  const method=props.method

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={<Typography type="body2" className={classes.tulisanjudul}  >{judulfilter}</Typography>} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.listitems}  >
            {isifilter.map((item,index) => {
                return(
                    <ListItem selected={selectedIndex === (index)} onClick={(event) => {handleListItemClick(event, index)}} button className={classes.nested}>
                        <ListItemText primary={<Typography type="body2" className={classes.tulisanisi}  >{item}</Typography>} onClick={method[index]} />
                    </ListItem>
                )
            })}
        </List>
      </Collapse>
    </List>
  );
}
