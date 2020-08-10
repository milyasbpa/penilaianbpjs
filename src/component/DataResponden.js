import React,{useState,useEffect} from 'react';
import Filter from './Filter';
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

export default function DataResponden(props) {
    const classes = useStyles()
    const datares=props.datares

    const [tinggi, setTinggi] = useState(window.innerHeight);

    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
      setTinggi(window.innerHeight);
  };

    return (
        <div className={classes.root} style={{minHeight:tinggi}}>
            {props.datares["Sheet1"].length > 2 ? 
            <Filter jsontotal={datares}/> :
            <div>
              <Typography className={classes.tulisan404} >404</Typography>
              <Typography className={classes.tulisansite} >Halaman tidak ditemukan</Typography>
            </div>
        }
        </div>
    )
}
