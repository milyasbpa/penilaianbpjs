import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// import data from './data/data.json';
// import datas from './data/dataapotekonline.json';

// import FilterButton from './FilterButton';
// import GroupButton from './GroupButton';

import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import {warnagrafik,warnaborder} from './warna/warna'

// Style
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:'20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));



export default function Filter(props) {
    // const {datas}=props.data
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
    const age=[all2,bawah25,atas24,atas34,atas44,atas54,atas64]
    const labelage=['All','< 25','25-34','35-44','45-54','55-64','> 64']

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
    const network=[all3,telkom,firstmedia,mncplay,biznet,myrepublic,telkomsel,xlaxis,indosat,smartfren,three]
    const labelnetwork=['All','Kabel: Telkom','Kabel: First Media','Kabel: MNC Play','Kabel: Biznet','Kabel: MyRepublic',
    'Seluler: Telkomsel','Seluler: XL/Axis','Seluler: Indosat','Seluler: Smartfren','Seluler: 3']

    // Device
    const [Device,setDevice] = useState(`All`)
    const windows=()=> {setDevice('PC/Laptop: Windows')}
    const linux=()=> {setDevice('PC/Laptop: Linux')}
    const macos=()=> {setDevice('PC/Laptop: MacOs')}
    const android=()=> {setDevice('Mobile: Android')}
    const ios=()=> {setDevice('Mobile: Apple iOS')}
    const all4=()=> {setDevice('All')}
    const pcdevice = [all4,windows,linux,macos,android,ios]
    const labelpcdevice=['All','PC/Laptop: Windows','PC/Laptop: Linux','PC/Laptop: MacOs','Mobile: Android','Mobile: Apple iOS']

    const [Provinsi,setProvinsi] = useState('All')
    const aceh=()=>{setProvinsi('Bali')} 
    const bali=()=>{setProvinsi('Banten')}
    const banten=()=>{setProvinsi('Bengkulu')}
    const bengkulu=()=>{setProvinsi('D.I Yogyakarta')}
    const diy=()=>{setProvinsi('D.K.I Jakarta')}
    const dki=()=>{setProvinsi('Gorontalo')}
    const gorontalo=()=>{setProvinsi('Jambi')}
    const jambi=()=>{setProvinsi('Jawa Barat')}
    const jawabarat=()=>{setProvinsi('Jawa Tengah')}
    const jawatengah=()=>{setProvinsi('Jawa Tengah')}
    const jawatimur=()=>{setProvinsi('Jawa Timur')}
    const kalimantanbarat=()=>{setProvinsi('Kalimantan Barat')}
    const kalimantanselatan=()=>{setProvinsi('Kalimantan Selatan')}
    const kalimantantengah=()=>{setProvinsi('Kalimantan Tengah')}
    const kalimantantimur=()=>{setProvinsi('Kalimantan Timur')}
    const kalimantanutara=()=>{setProvinsi('Kalimantan Utara')}
    const kepulauanbangkabelitung=()=>{setProvinsi('Kepulauan Bangka Belitung')}
    const kepulauanriau=()=>{setProvinsi('Kepulauan Riau')}
    const maluku=()=>{setProvinsi('Maluku')}
    const malukuutara=()=>{setProvinsi('Maluku Utara')}
    const ntb=()=>{setProvinsi('Nusa Tenggara Barat')}
    const ntt=()=>{setProvinsi('Nusa Tenggara Timur')}
    const papua=()=>{setProvinsi('Papua')}
    const papuabarat=()=>{setProvinsi('Papua Barat')}   
    const riau=()=>{setProvinsi('Riau')}
    const sulawesibarat=()=>{setProvinsi('Sulawesi Barat')}
    const sulawesiselatan=()=>{setProvinsi('Sulawesi Selatan')}
    const sulawesitengah=()=>{setProvinsi('Sulawesi Tengah')}
    const sulawesitenggara=()=>{setProvinsi('Sulawesi Tenggara')}
    const sulawesiutara=()=>{setProvinsi('Sulawesi Utara')}
    const sumaterabarat=()=>{setProvinsi('Sumatera Barat')}
    const sumateraselatan=()=>{setProvinsi('Sumatera Selatan')}
    const sumaterautara=()=>{setProvinsi('Sumatera Utara')}
    const daerahprovinsi=[
        aceh,bali,banten,bengkulu,diy,dki,gorontalo,
        jambi,jawabarat,jawatengah,jawatimur,kalimantanbarat,kalimantanselatan,kalimantantengah,
        kalimantantimur,kalimantanutara,kepulauanbangkabelitung,kepulauanriau,maluku,malukuutara,
        ntb,ntt,papua,papuabarat,riau,sulawesibarat,sulawesiselatan,sulawesitengah,
        sulawesitenggara,sulawesiutara,sumaterabarat,sumateraselatan,sumaterautara
    ]
    const labelprovinsi=[
        'All','Aceh','Bali','Banten','Bengkulu','D.I Yogyakarta','D.K.I Jakarta','Gorontalo',
        'Jambi','Jawa Barat','Jawa Tengah','Jawa Timur','Kalimantan Barat','Kalimantan Selatan','Kalimantan Tengah',
        'Kalimantan Timur','Kalimantan Utara','Kepualauan Bangka Belitung','Kepulauan Riau','Maluku','Maluku Utara',
        'Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulawesi Selatan','Sulawesi Tengah',
        'Sulawesi Tenggara','Sulawesi Utara','Sumatera Barat','Sumatera Selatan','Sumatera Utara'
    ]


    // const [datas,setDataFilter]=useState({})
    let filterdata={
        "Jenis kelamin" : JenisKelamin,
        "Usia (Tahun)" : Usia,
        "Jaringan apa yang Anda gunakan untuk mengakses Aplikasi?" : Jaringan,
        "Perangkat apa yang Anda gunakan untuk mengakses Aplikasi?" : Device,
        "Provinsi" : Provinsi
    }

    for (let key in filterdata){
        if (filterdata[key] === 'All') delete filterdata[key]
    }

    
    const datafilter = props.jsontotal["Sheet1"].filter(item => {
                            for (let key in filterdata){
                                    if (item[key] === undefined || item[key] !== filterdata[key])
                                    return false
                                } return true
                            })
    
    const datafilterpanjang = datafilter.length

    
    
    const classes = useStyles();
    
    

    const labelkepuasan = ['Sangat puas','Puas','Cukup puas', 'Kurang puas', 'Tidak puas']
    const grafikkepuasan = labelkepuasan.map(labelkepuasan=> 
        datafilter.filter(item=>item["Bagaimana tingkat kepuasan Anda terhadapÂ layanan yang tersedia di aplikasi?"]===labelkepuasan).length
        )

    const labelkepercayaan = ['Sangat percaya','Percaya','Cukup percaya', 'Kurang percaya', 'Tidak percaya']
    const grafikkepercayaan = labelkepercayaan.map(labelkepercayaan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kepercayaanÂ Anda terhadap aplikasi?"]===labelkepercayaan).length
        )

    const labelkesenangan = ['Sangat senang','Senang','Cukup senang', 'Kurang senang', 'Tidak senang']
    const grafikkesenangan = labelkesenangan.map(labelkesenangan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kesenanganÂ AndaÂ dalam menggunakan aplikasi?"]===labelkesenangan).length
        )
    
    const labelkenyamanan = ['Sangat nyaman','Nyaman','Cukup nyaman', 'Kurang nyaman', 'Tidak nyaman']
    const grafikkenyamanan = labelkenyamanan.map(labelkenyamanan=> 
        datafilter.filter(item=>item["Sejauh mana tingkat kenyamanan Anda dalam mengoperasikan aplikasi?"]===labelkenyamanan).length
        )

    const labelkesalahanoperasi = ['Sangat sering','Sering','Cukup sering', 'Jarang', 'Tidak pernah']
    const grafikkesalahanoperasi = labelkesalahanoperasi.map(labelkesalahanoperasi=> 
        datafilter.filter(item=>item["Seberapa sering Anda melakukan kesalahan dalam mengoperasikan aplikasi?"]===labelkesalahanoperasi).length
        )
    
    const labeltampilan = ['1','2','3', '4', '5']
    const grafiktampilan = labeltampilan.map(labeltampilan=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai tampilan aplikasi"]===labeltampilan).length
        )

    const labelkelengkapan = ['1','2','3', '4', '5']
    const grafikkelengkapan = labelkelengkapan.map(labelkelengkapan=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai kelengkapan fitur aplikasi"]===labelkelengkapan).length
        )

    const labelkemudahan = ['1','2','3', '4', '5']
    const grafikkemudahan = labelkemudahan.map(labelkemudahan=> 
        datafilter.filter(item=>item["Berikan penilaian Anda mengenai kemudahan pengoperasian aplikasi"]===labelkemudahan).length
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


    
    // const options= {
    //     title:{
    //         display:true,
    //         text:'TS',
    //         fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    //         fontStyle:'bold',
    //         fontSize:14,
    //     },
    //     animation:{
    //         duration :3000
    //     },
    //     scales: {
    //         yAxes: [{
    //            ticks: {
    //               beginAtZero: true
    //            }
    //         }]
    //      }
    // }

    const optionssemua = juduldatasemua.map(item=> {return{
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

    return (
        <div className="Filter" style={{}} >
            <br />
            <Typography variant="h4">Analisis Data</Typography>
            <br />
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Jenis Kelamin</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {gender.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelgender[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Usia</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {age.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelage[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Jaringan</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {network.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelnetwork[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Sistem Operasi</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {pcdevice.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelpcdevice[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Provinsi</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                    {daerahprovinsi.map((item,index)=>{
                    return <MenuItem onClick={item} value={index}>{labelprovinsi[index]}</MenuItem>
                    })}
                    </Select>
                </FormControl>
                
            </div>
            
            
            <br/>
            <Typography variant="h5" >Total Responden</Typography>
            <Typography variant="h1" >{datafilterpanjang}</Typography>        

            <div className={classes.root}>
                <Grid container spacing={3} style={{backgroundColor:'#fff'}}>
                   
                    {datasemuagrafik.map((datasemuagrafik,index) => {return (
                        <Grid item xs={12} sm={6} md={4} >
                            {/* <Typography variant="p">{juduldatasemua[index]}</Typography> */}
                            <Bar data={datasemuagrafik} options={optionssemua[index]}  />
                        </Grid>
                    )}
                    )}
                    
                </Grid>
            </div>
            

        </div>
    )
}

