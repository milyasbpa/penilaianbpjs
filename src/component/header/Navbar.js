import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';


import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import { 
//   Link 
// } from 'react-router-dom';
import VerticalTabs from './VerticalTabs';

// import Layout from '../layout/Layout'


// import {menulink1} from './arraymenu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  paper: {
    marginRight: theme.spacing(2),
    
  },
  arrowTrue: {
    transition:'all 0.75s',
    transform:'rotate(180deg)',    
  },
  arrowFalse:{
    transition:'all 0.75s',
    transform:'rotate(0deg)',
  },
  menuItemStyle:{
    textTransform:'none',
    fontSize:'14px'
  }
}));


export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const aplikasi=props.aplikasi;
  const judul=props.judul;
  const pagination=props.pagination;

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const ITEM_HEIGHT = 48;
  return (
    <div className={classes.root}>
      
      <div>
        <Button className={classes.menuItemStyle}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {judul}
          <ArrowDropDownIcon className={open ? classes.arrowTrue : classes.arrowFalse }  />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            // <Grow
            //   {...TransitionProps}
            //   style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            // >
            //   <Paper style={{maxHeight: ITEM_HEIGHT * 4.5, width: '20ch',overflowY:'scroll'}} >
            //     <ClickAwayListener onClickAway={handleClose}>
            //       <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            //         {aplikasi.map((item,index) => {
            //           return (
            //             <MenuItem className={classes.menuItemStyle} component={Link} to={pagination[index]} >
            //               {item}
            //             </MenuItem>
                        
            //           )
            //         })}
            //       </MenuList>
            //     </ClickAwayListener>
            //   </Paper>
              

            // </Grow>
            
            <div style={{display:'flex'}}>
              <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
            >
              <Paper style={{maxHeight: ITEM_HEIGHT * 4.5, width: '90ch'}} >
                <ClickAwayListener onClickAway={handleClose}>
                  {/* <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {aplikasi.map((item,index) => {
                      return (
                        <MenuItem className={classes.menuItemStyle} component={Link} to={pagination[index]} >
                          {item}
                          
                        </MenuItem>
                        
                      )
                    })}
                  </MenuList> */}
                  <VerticalTabs aplikasi={aplikasi} pagination={pagination}/>
                </ClickAwayListener>
              </Paper>
              

            </Grow>

            </div>

          )}
        </Popper>
      </div>
    </div>
  );
}
