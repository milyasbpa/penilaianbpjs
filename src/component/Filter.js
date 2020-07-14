import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import data from './data/data.json';
import FilterButton from './FilterButton';
// import GroupButton from './GroupButton';

import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import {warnagrafik,warnaborder} from './warna/warna'

// Style
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'20px'
    },
  }));



export default function Filter() {
    // Jenis Kelamin
    const [JenisKelamin,setJenisKelamin] = useState('All')
    const laki=()=> {setJenisKelamin('Laki-laki')}
    const wanita=()=> {setJenisKelamin('Perempuan')}
    const all=()=> {setJenisKelamin(`All`)}
    const gender=[all,laki,wanita]
    const labelgender=['All', 'Laki-laki','Perempuan']
    // const hitung=[0,1,2]

    // Usia
    const [Usia,setUsia] = useState(`All`)
    const bawah25=()=> {setUsia('< 25')}
    const atas24=()=> {setUsia('25-34')}
    const atas34=()=> {setUsia('35-44')}
    const atas44=()=> {setUsia('45-54')}
    const atas54=()=> {setUsia('55-64')}
    const atas64=()=> {setUsia('> 64')}
    const all2=()=> {setUsia(`All`)}

    // Jaringan kabel
    const [Jaringan,setJaringan] = useState(`All`)
    const telkom=()=> {setJaringan('Kabel: Telkom')}
    const firstmedia=()=> {setJaringan('Kabel: First Media')}
    const mncplay=()=> {setJaringan('Kabel: MNC Play')}
    const biznet=()=> {setJaringan('Kabel: Biznet')}
    const myrepublic=()=> {setJaringan('Kabel: MyRepublic')}
    const all3=()=> {setJaringan('All')}
    const telkomsel=()=> {setJaringan('Seluler: Telkomsel')}
    const xlaxis=()=> {setJaringan('Seluler: XL/Axis')}
    const indosat=()=> {setJaringan('Seluler: Indosat')}
    const smartfren=()=> {setJaringan('Seluler: Smartfren')}
    const three=()=> {setJaringan('Seluler: 3')}

    // Device
    const [Device,setDevice] = useState(`All`)
    const windows=()=> {setDevice('PC/Laptop: Windows')}
    const linux=()=> {setDevice('PC/Laptop: Linux')}
    const macos=()=> {setDevice('PC/Laptop: MacOs')}
    const android=()=> {setDevice('Mobile: Android')}
    const ios=()=> {setDevice('Mobile: Apple iOS')}
    const all4=()=> {setDevice('All')}
    

    // const [datas,setDataFilter]=useState({})
    let filterdata={
        "Jenis kelamin" : JenisKelamin,
        "Usia" : Usia,
        "Jaringan" : Jaringan,
        "Perangkat" : Device
    }

    for (let key in filterdata){
        if (filterdata[key] === 'All') delete filterdata[key]
    }

    
    const datafilter = data["Evaluasi Kualitas Aplikasi Pcar"].filter(item => {
                            for (let key in filterdata){
                                    if (item[key] === undefined || item[key] !== filterdata[key])
                                    return false
                                } return true
                            })
    
    const datafilterpanjang = datafilter.length

    
    
    const classes = useStyles();
    
    

    const labelkepuasan = ['Sangat puas','Puas','Cukup puas', 'Kurang puas', 'Tidak puas']
    const grafikkepuasan = labelkepuasan.map(labelkepuasan=> 
        datafilter.filter(item=>item["Kepuasan"]===labelkepuasan).length
        )

    const labelkepercayaan = ['Sangat percaya','Percaya','Cukup percaya', 'Kurang percaya', 'Tidak percaya']
    const grafikkepercayaan = labelkepercayaan.map(labelkepercayaan=> 
        datafilter.filter(item=>item["Kepercayaan"]===labelkepercayaan).length
        )

    const labelkesenangan = ['Sangat senang','Senang','Cukup senang', 'Kurang senang', 'Tidak senang']
    const grafikkesenangan = labelkesenangan.map(labelkesenangan=> 
        datafilter.filter(item=>item["Kesenangan"]===labelkesenangan).length
        )
    
    const labelkenyamanan = ['Sangat nyaman','Nyaman','Cukup nyaman', 'Kurang nyaman', 'Tidak nyaman']
    const grafikkenyamanan = labelkenyamanan.map(labelkenyamanan=> 
        datafilter.filter(item=>item["Kenyamanan"]===labelkenyamanan).length
        )

    const labelkesalahanoperasi = ['Sangat sering','Sering','Cukup sering', 'Jarang', 'Tidak pernah']
    const grafikkesalahanoperasi = labelkesalahanoperasi.map(labelkesalahanoperasi=> 
        datafilter.filter(item=>item["Kesalahan operasi"]===labelkesalahanoperasi).length
        )
    
    const labeltampilan = ['1','2','3', '4', '5']
    const grafiktampilan = labeltampilan.map(labeltampilan=> 
        datafilter.filter(item=>item["Tampilan"]===labeltampilan).length
        )

    const labelkelengkapan = ['1','2','3', '4', '5']
    const grafikkelengkapan = labelkelengkapan.map(labelkelengkapan=> 
        datafilter.filter(item=>item["Kelengkapan fitur"]===labelkelengkapan).length
        )

    const labelkemudahan = ['1','2','3', '4', '5']
    const grafikkemudahan = labelkemudahan.map(labelkemudahan=> 
        datafilter.filter(item=>item["Kemudahan operasi"]===labelkemudahan).length
        )

    const datasemua=[grafikkepuasan,grafikkepercayaan,grafikkesenangan,grafikkenyamanan,grafikkesalahanoperasi,grafiktampilan,grafikkelengkapan,grafikkemudahan]
    const labelsemua=[labelkepuasan,labelkepercayaan,labelkesenangan,labelkenyamanan,labelkesalahanoperasi,labeltampilan,labelkelengkapan,labelkemudahan]
    const juduldatasemua = ['Kepuasan','Kepercayaan','Kesenangan','Kenyamanan','Kesalahan Operasi','Tampilan','Kelengkapan Fitur','Kemudahan Operasi']

    
    const datasemuagrafik=datasemua.map((item,index)=> {
    return {
        labels:labelsemua[index],
        datasets: [{
            label: 'Pengguna',
            data: item,
            backgroundColor: warnagrafik,
            borderColor: warnaborder,
            borderWidth: 1
    }]
    }
})


    // const datakepuasan= {
    //     labels: labelkepuasan,
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: grafikkepuasan,
    //         backgroundColor: warnagrafik,
    //         borderColor: warnaborder,
    //         borderWidth: 1
    //     }]
    // }

    // const datakepercayaan= {
    //     labels: labelkepercayaan,
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: grafikkepercayaan,
    //         backgroundColor: warnagrafik,
    //         borderColor: warnaborder,
    //         borderWidth: 1
    //     }]
    // }

    

    // // const sangatsenang=datafilter.filter(item => item["Kesenangan"] === 'Sangat senang').length
    // // const senang=datafilter.filter(item => item["Kesenangan"] === 'Senang').length
    // // const cukupsenang=datafilter.filter(item => item["Kesenangan"] === 'Cukup senang').length
    // // const kurangsenang=datafilter.filter(item => item["Kesenangan"] === 'Kurang senang').length
    // // const tidaksenang=datafilter.filter(item => item["Kesenangan"] === 'Tidak senang').length 

    // const datakesenangan= {
    //     labels: ['Sangat Senang', 'Senang', 'Cukup Senang', 'Kurang Senang', 'Tidak Senang'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [sangatsenang, senang, cukupsenang, kurangsenang, tidaksenang],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // // const sangatnyaman=datafilter.filter(item => item["Kenyamanan"] === 'Sangat nyaman').length
    // // const nyaman=datafilter.filter(item => item["Kenyamanan"] === 'Nyaman').length
    // // const cukupnyaman=datafilter.filter(item => item["Kenyamanan"] === 'Cukup nyaman').length
    // // const kurangnyaman=datafilter.filter(item => item["Kenyamanan"] === 'Kurang nyaman').length
    // // const tidaknyaman=datafilter.filter(item => item["Kenyamanan"] === 'Tidak nyaman').length 

    // const datakenyamanan= {
    //     labels: ['Sangat Nyaman', 'Nyaman', 'Cukup Nyaman', 'Kurang Nyaman', 'Tidak Nyaman'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [sangatnyaman, nyaman, cukupnyaman, kurangnyaman, tidaknyaman],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // const ksangatsering=datafilter.filter(item => item["Kesalahan operasi"] === 'Sangat sering').length
    // const ksering=datafilter.filter(item => item["Kesalahan operasi"] === 'Sering').length
    // const kcukupsering=datafilter.filter(item => item["Kesalahan operasi"] === 'Cukup sering').length
    // const kjarang=datafilter.filter(item => item["Kesalahan operasi"] === 'Jarang').length
    // const ktidakpernah=datafilter.filter(item => item["Kesalahan operasi"] === 'Tidak pernah').length 

    // const datakesalahanoperasi= {
    //     labels: ['Sangat Sering', 'Sering', 'Cukup Sering', 'Jarang', 'Tidak Pernah'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [ksangatsering, ksering, kcukupsering, kjarang, ktidakpernah],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // const tampilan5=datafilter.filter(item => item["Tampilan"] === '5').length
    // const tampilan4=datafilter.filter(item => item["Tampilan"] === '4').length
    // const tampilan3=datafilter.filter(item => item["Tampilan"] === '3').length
    // const tampilan2=datafilter.filter(item => item["Tampilan"] === '2').length
    // const tampilan1=datafilter.filter(item => item["Tampilan"] === '1').length 

    // const datatampilan= {
    //     labels: ['1', '2', '3', '4', '5'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [tampilan1, tampilan2, tampilan3, tampilan4, tampilan5],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // const kelengkapan5=datafilter.filter(item => item["Kelengkapan fitur"] === '5').length
    // const kelengkapan4=datafilter.filter(item => item["Kelengkapan fitur"] === '4').length
    // const kelengkapan3=datafilter.filter(item => item["Kelengkapan fitur"] === '3').length
    // const kelengkapan2=datafilter.filter(item => item["Kelengkapan fitur"] === '2').length
    // const kelengkapan1=datafilter.filter(item => item["Kelengkapan fitur"] === '1').length 

    // const datakelengkapan= {
    //     labels: ['1', '2', '3', '4', '5'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [kelengkapan1, kelengkapan2, kelengkapan3, kelengkapan4, kelengkapan5],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // const kemudahan5=datafilter.filter(item => item["Kemudahan operasi"] === '5').length
    // const kemudahan4=datafilter.filter(item => item["Kemudahan operasi"] === '4').length
    // const kemudahan3=datafilter.filter(item => item["Kemudahan operasi"] === '3').length
    // const kemudahan2=datafilter.filter(item => item["Kemudahan operasi"] === '2').length
    // const kemudahan1=datafilter.filter(item => item["Kemudahan operasi"] === '1').length 

    // const datakemudahan= {
    //     labels: ['1', '2', '3', '4', '5'],
    //     datasets: [{
    //         label: 'Pengguna',
    //         data: [kemudahan1, kemudahan2, kemudahan3, kemudahan4, kemudahan5],
    //         backgroundColor: [
    //             '#303C55',
    //             '#8892b0',
    //             '#a8b2d1',
    //             '#ccd6f6',
    //             '#e6f1ff',
    //             '#64ffda',
    //         ],
    //         borderColor: [
    //             'rgba(187, 134, 252, 0.87)',
    //             'rgba(3, 218, 198, 0.87)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    // const datasemua=[datakepuasan,datakepercayaan,datakesenangan,datakenyamanan,datakesalahanoperasi,datatampilan,datakelengkapan,datakemudahan]

    const options= {
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
    }

    return (
        <div className="Filter" style={{}} >
            <br />
            <Typography variant="h4">Analisis Data</Typography>
            <br />
            <div>
                {gender.map((item,index)=>{
                    return <FilterButton gender={item} tulisan={labelgender[index]} />
                })}

            </div>
            
            <div>
                <FilterButton gender={all2} tulisan={'All'} />
                <FilterButton gender={bawah25} tulisan={'< 25'} />
                <FilterButton gender={atas24} tulisan={'25-34'} />
                <FilterButton gender={atas34} tulisan={'35-44'} />
                <FilterButton gender={atas44} tulisan={'45-54'} />
                <FilterButton gender={atas54} tulisan={'55-64'} />
                <FilterButton gender={atas64} tulisan={'> 64'} />
            </div>

            <div>
                <FilterButton gender={all3} tulisan ={'All'} />
                <FilterButton gender={telkom} tulisan ={'Telkom'} />
                <FilterButton gender={firstmedia} tulisan ={'First Media'} />
                <FilterButton gender={mncplay} tulisan ={'MNC Play'} />
                <FilterButton gender={biznet} tulisan ={'Biznet'} />
                <FilterButton gender={myrepublic} tulisan ={'MyRepublic'} />
            </div>

            <div>
                <FilterButton gender={telkomsel} tulisan ={'Telkomsel'} />
                <FilterButton gender={xlaxis} tulisan ={'XL/Axis'} />
                <FilterButton gender={indosat} tulisan ={'Indosat'} />
                <FilterButton gender={smartfren} tulisan ={'Smartfren'} />
                <FilterButton gender={three} tulisan ={'3'} />
            </div>
            
            <div>
                <FilterButton gender={all4} tulisan ={'All'} />
                <FilterButton gender={windows} tulisan ={'Windows'} />
                <FilterButton gender={linux} tulisan ={'Linux'} />
                <FilterButton gender={macos} tulisan ={'Mac Os'} />
                <FilterButton gender={android} tulisan ={'Android'} />
                <FilterButton gender={ios} tulisan ={'Appple iOS'} /> 
            </div>

            
            <br/>
            <Typography variant="h5" >Total Responden</Typography>
            <Typography variant="h1" >{datafilterpanjang}</Typography>        

            <div className={classes.root}>
                <Grid container spacing={3}>
                   
                    {datasemuagrafik.map((datasemuagrafik,index) => {return (
                        <Grid item xs={12} sm={6} md={4} >
                            <Typography variant="p">{juduldatasemua[index]}</Typography>
                            <Bar data={datasemuagrafik} options={options}  />
                        </Grid>
                    )}
                    )}
                    
                </Grid>
            </div>
            

        </div>
    )
}

