import React from 'react'
// import data from './data/data.json'
// import {laki, perempuan, usiabawah25, usia25,usia35,usia45,usia55,usiaatas64 } from './CollectionFilter'
import {datakelamin,datausia, datajaringankabel, datajaringanseluler, datadevice, datapulau} from './DataChart'
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// const laki=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Jenis kelamin"]==='Laki-laki').length
// const perempuan=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Jenis kelamin"]==='Perempuan').length

// const datakelamin= {
//     labels: ['Laki-laki', 'Perempuan'],
//     datasets: [{
//         label: '# of Votes',
//         data: [laki, perempuan],
//         backgroundColor: [
//             'rgba(187, 134, 252, 0.60)',
//             'rgba(3, 218, 198, 0.60)',
//         ],
//         borderColor: [
//             'rgba(187, 134, 252, 0.87)',
//             'rgba(3, 218, 198, 0.87)',
//         ],
//         borderWidth: 1
//     }]
// }

// const usiabawah25=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='< 25').length
// const usia25=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='25-34').length
// const usia35=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='35-44').length
// const usia45=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='45-54').length
// const usia55=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='55-64').length
// const usiaatas64=data["Evaluasi Kualitas Aplikasi Pcar"].filter(data => data["Usia"]==='> 64').length

// const datausia= {
//     labels: ['< 25', '25-34', '35-44', '45-44', '55-64', '> 64'],
//     datasets: [{
//         label: '# of Votes',
//         data: [usiabawah25, usia25, usia35, usia45, usia55, usiaatas64],
//         backgroundColor: [
//             'rgba(187, 134, 252, 0.60)',
//             'rgba(3, 218, 198, 0.60)',
//         ],
//         borderColor: [
//             'rgba(187, 134, 252, 0.87)',
//             'rgba(3, 218, 198, 0.87)',
//         ],
//         borderWidth: 1
//     }]
// }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'20px'
    },
  }));

export default function Nangkap() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" style={{color: '#ffffff',opacity:0.87}}>Aplikasi P-Care</Typography>
            <Typography paragraph > 
                Aplikasi yang digunakan untuk pencatatan dan penagihan pelayanan non-kapitasi BPJS Kesehatan oleh  FKTP
            </Typography>
            <br/>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Jenis Kelamin</Typography>
                    <Pie data={datakelamin} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Usia</Typography>
                    <Pie data={datausia} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Jaringan Kabel</Typography>
                    <Bar data={datajaringankabel} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Jaringan Seluler</Typography>
                    <Bar data={datajaringanseluler} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Device</Typography>
                    <Bar data={datadevice} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Daerah</Typography>
                    <Bar data={datapulau} />
                </Grid>
            </Grid>
            {/* <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Jenis Kelamin</Typography>
            <Pie data={datakelamin} />
            <Typography variant="p" style={{color: '#ffffff',opacity:0.87}}>Usia</Typography>
            <Pie data={datausia} /> */}
        </div>
    )
}


