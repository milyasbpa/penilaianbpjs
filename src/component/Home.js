import React,{useState,useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import CardMedia from '@material-ui/core/CardMedia';

// import tambahan



const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      margin:'auto',
      alignItems:'center',
      justifyItems:'center'
      
    },
    // media:{
    //     height:50,
    //     width:'75%',
    //     objectFit:'cover',
        
    // }
    
  }));

  export default function Nangkap() {
    const [tinggi, setTinggi] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setTinggi(window.innerHeight);
    };

    const classes = useStyles();
    return (
        <div className={classes.root} style={{minHeight:tinggi, maxWidth:'1280px'}}>
            <div >
                <Typography fontWeight="fontWeightMedium" variant="h3" style={{color: '#000000',opacity:0.87}}>
                    Assesment Kualitas Sistem Teknologi Informasi BPJS Kesehatan tahun 2020
                </Typography>
                <Typography fontWeight="fontWeightBold" variant="h5" style={{color: '#000000',opacity:0.87}}>
                    ISO 25010
                </Typography>
                {/* <CardMedia
                    className={classes.media}
                    image={require("./bpjs.png")}
                    title="BPJS"
                /> */}
            </div>
            
        </div>
    )
}

