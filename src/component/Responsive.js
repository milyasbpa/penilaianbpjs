import React,{useState,useEffect} from 'react'
// import {datatotalgrafik} from './DataChart'
// import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'
// import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:'auto',
    //   background:'000',
      
      
    },
  }));

  const juduldata=['Jenis Kelamin','Usia','Jaringan Kabel', 'Jaringan Seluler', 'Perangkat','Daerah']

  const optionssemua = juduldata.map(item=> {return{
    title:{
        display:true,
        text:item,
        fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle:'bold',
        fontSize:14,
    },
    animation:{
        duration :3000
    },
    scales: {
        yAxes: [{
           ticks: {
              beginAtZero: true
           }
        }]
     }
}})

export default function Nangkap(props) {
    const datatotalgrafik=props.datatotalgrafik
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
        <div className={classes.root} style={{minHeight:tinggi}}>
            <Container maxWidth={'lg'} style={{backgroundColor:'#fff'}}>
            
            <Grid container spacing={3} >
            {datatotalgrafik.map((item,index) => {
                return (
                    <Grid item xs={12} sm={6} md={4}style={{backgroundColor:'#fff'}}>
                        {/* <Typography variant="p" >{juduldata[index]}</Typography> */}
                        <Bar data={item} options={optionssemua[index]}/>
                    </Grid>
                )
            })}
            </Grid>
                            
            </Container>

        </div>
    )
}


