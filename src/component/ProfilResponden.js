import React,{useState,useEffect} from 'react';
import Responsive from './Responsive';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
      display:'flex',
      margin:'auto',
      justifyContent:'center',
      alignItems:'center',
    //   background:'000',  
    },
    tulisan404:{
        fontSize:'108px',
        fontWeight:'bold',
        color:'#d3d3d3',
      },
      tulisansite:{
        fontSize:'24px',
        color:'#808080',
      },
  }));

export default function ProfilResponden(props) {
    const classes = useStyles();
    const profilres=props.datatotalgrafik;

    const [tinggi, setTinggi] = useState(window.innerHeight);

    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
      setTinggi(window.innerHeight);
  };

    return (
        <div className={classes.root} style={{minHeight:tinggi}} >
            {props.jsontotal["Sheet1"].length > 2 ? 
            <Responsive datatotalgrafik={profilres}/> :
            <div>
              <Typography className={classes.tulisan404} >404</Typography>
              <Typography className={classes.tulisansite} >Halaman tidak ditemukan</Typography>
            </div>
        }
        </div>
    )
}
