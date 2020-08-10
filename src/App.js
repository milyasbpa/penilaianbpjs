import React from 'react';
import './App.css';
import Header1 from './component/header/Header1';

import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
// import Layout2 from './component/layout/Layout2';
import ProfilResponden from './component/ProfilResponden';
import DataResponden from './component/DataResponden';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';



import {datatotalgrafik} from './component/CollectionFilter'
import {dataantreanonline} from './component/dataolah/DataAntreanOnline'
import {dataapotekonline} from './component/dataolah/DataApotekOnline'
import {dataedabu} from './component/dataolah/DataEDabu'
import {datahfis} from './component/dataolah/DataHFIS'
import {datalupis} from './component/dataolah/DataLupis'
import {datamobilejkn} from './component/dataolah/DataMobileJKN'
import {datapcare} from './component/dataolah/DataPcare'
import {datarbu} from './component/dataolah/DataRBU'
import {datasipp} from './component/dataolah/DataSIPP'
import {datavclaim} from './component/dataolah/DataVclaim'

import {databoainternal} from './component/dataolahinternal/DataBOA'
import {datalupisinternal} from './component/dataolahinternal/DataLupis'
import {datapcareinternal} from './component/dataolahinternal/DataPcare'
import {dataverifikasidigitalinternal} from './component/dataolahinternal/DataVerifikasiDigital'
import {datahfisinternal} from './component/dataolahinternal/DataHFIS'
import {dataapotekonlineinternal} from './component/dataolahinternal/DataApotekOnline'
import {datakeuanganinternal} from './component/dataolahinternal/DataKeuangan'
import {datanewinmonicainternal} from './component/dataolahinternal/DataNewInMonica'
import {dataiuranwajibinternal} from './component/dataolahinternal/DataIuranWajib'
import {datawasrikinternal} from './component/dataolahinternal/DataWasrik'
import {datakepesertaaninternal} from './component/dataolahinternal/DataKepesertaan'
import {dataedabuinternal} from './component/dataolahinternal/DataEDabu'
import {datasippinternal} from './component/dataolahinternal/DataSIPP'
import {datacstiinternal} from './component/dataolahinternal/DataCSTI'

// import {menulinktotal,judulmenutotal,deskripsimenutotal} from './component/header/arraymenu';
import {menulinkkom} from './component/header/arraymenu'

import datas from './component/data/data.json';
import jsonantreanonline from './component/data/dataantreanonline.json';
import jsonapotekonline from './component/data/dataantreanonline.json';
import jsonedabu from './component/data/dataedabu.json';
import jsonhfis from './component/data/datahfis.json';
import jsonlupis from './component/data/datalupis.json';
import jsonmobilejkn from './component/data/datamobilejkn.json';
import jsonpcare from './component/data/datapcare.json';
import jsonrbu from './component/data/datarbu.json';
import jsonsipp from './component/data/datasipp.json';
import jsonvclaim from './component/data/datavclaim.json';

import jsonapotekonlineinternal from './component/datainternal/dataapotekonline.json'
import jsonboainternal from './component/datainternal/databoa.json'
import jsoncstiinternal from './component/datainternal/datacsti.json'
import jsonedabuinternal from './component/datainternal/dataedabu.json'
import jsonhfisinternal from './component/datainternal/datahfis.json'
import jsoniuranwajibinternal from './component/datainternal/dataiuranwajib.json'
import jsonkepesertaaninternal from './component/datainternal/datakepesertaan.json'
import jsonkeuanganinternal from './component/datainternal/datakeuangan.json'
import jsonlupisinternal from './component/datainternal/datalupis.json'
import jsonnewinmonicainternal from './component/datainternal/datanewinmonica.json'
import jsonpcareinternal from './component/datainternal/datapcare.json'
import jsonsippinternal from './component/datainternal/datasipp.json'
import jsonverifikasidigitalinternal from './component/datainternal/dataverifikasidigital.json'
import jsonwasrikinternal from './component/datainternal/datawasrik.json'



// import {datatotalgrafik} from './DataChart'
// import InputCoba from './component/InputCoba'

// const profiltot = [
//   datatotalgrafik,datalupis,datapcare,
//   datavclaim,datatotalgrafik,datahfis,
//   dataantreanonline,dataapotekonline,datatotalgrafik,
//   datatotalgrafik,datatotalgrafik,datatotalgrafik,
//   datatotalgrafik,datarbu,dataedabu,
//   datasipp,datatotalgrafik,datamobilejkn
// ]

const profiltot = [
  databoainternal,datatotalgrafik,
  datalupisinternal,datalupis,
  datapcareinternal,datapcare,
  datatotalgrafik,datavclaim,
  dataverifikasidigitalinternal,datatotalgrafik,
  datahfisinternal,datahfis,
  datatotalgrafik,dataantreanonline,
  dataapotekonlineinternal,dataapotekonline,
  datakeuanganinternal,datatotalgrafik,
  datanewinmonicainternal,datatotalgrafik,
  dataiuranwajibinternal,datatotalgrafik,
  datawasrikinternal,datatotalgrafik,
  datakepesertaaninternal,datatotalgrafik,
  datatotalgrafik,datarbu,
  dataedabuinternal,dataedabu,
  datasippinternal,datasipp,
  datacstiinternal,datatotalgrafik,
  datatotalgrafik,datamobilejkn
]

// const boat=[datatotalgrafik,databoainternal]
// const lupist=[datalupis,datalupisinternal]
// const pcaret=[datapcare,datapcareinternal]
// const vclaimt=[datavclaim,datatotalgrafik]
// const vdt=[datatotalgrafik,dataverifikasidigitalinternal]
// const hfist=[datahfis,datahfisinternal]
// const antreanonlinet=[dataantreanonline,datatotalgrafik]
// const apotekonlinet=[dataapotekonline,dataapotekonlineinternal]
// const keuangant=[datatotalgrafik,datakeuanganinternal]
// const newinmonicat=[datatotalgrafik,datanewinmonicainternal]
// const iuranwajibt=[datatotalgrafik,dataiuranwajibinternal]
// const wasrikt=[datatotalgrafik,datawasrikinternal]
// const kepesertaant=[datatotalgrafik,datakepesertaaninternal]
// const rbut=[datarbu,datatotalgrafik]
// const edabut=[dataedabu,dataedabuinternal]
// const sippt=[datasipp,datasippinternal]
// const cstit=[datatotalgrafik,datacstiinternal]
// const mobilejknt=[datamobilejkn,datatotalgrafik]

// const datatotal=[
//   boat,lupist,pcaret,vclaimt,vdt,hfist,antreanonlinet,apotekonlinet,keuangant,
//   newinmonicat,iuranwajibt,wasrikt,kepesertaant,rbut,edabut,sippt,cstit,mobilejknt
// ]

// const jsontotal =[
//   datas,jsonlupis,jsonpcare,
//   jsonvclaim,datas,jsonhfis,
//   jsonantreanonline,jsonapotekonline,datas,
//   datas,datas,datas,
//   datas,jsonrbu,jsonedabu,
//   jsonsipp,datas,jsonmobilejkn
// ]

const datares=[
  jsonboainternal,datas,
  jsonlupisinternal,jsonlupis,
  jsonpcareinternal,jsonpcare,
  datas,jsonvclaim,
  jsonverifikasidigitalinternal,datas,
  jsonhfisinternal,jsonhfis,
  datas,jsonantreanonline,
  jsonapotekonlineinternal,jsonapotekonline,
  jsonkeuanganinternal,datas,
  jsonnewinmonicainternal,datas,
  jsoniuranwajibinternal,datas,
  jsonwasrikinternal,datas,
  jsonkepesertaaninternal,datas,
  datas,jsonrbu,
  jsonedabuinternal,jsonedabu,
  jsonsippinternal,jsonsipp,
  jsoncstiinternal,datas,
  datas,jsonmobilejkn
]

// const boaj=[datas,jsonboainternal]
// const lupisj=[jsonlupis,jsonlupisinternal]
// const pcarej=[jsonpcare,jsonpcareinternal]
// const vclaimj=[jsonvclaim,datas]
// const vdj=[datas,jsonverifikasidigitalinternal]
// const hfisj=[jsonhfis,jsonhfisinternal]
// const antreanonlinej=[jsonantreanonline,datas]
// const apotekonlinej=[jsonapotekonline,jsonapotekonlineinternal]
// const keuanganj=[datas,jsonkeuanganinternal]
// const newinmonicaj=[datas,jsonnewinmonicainternal]
// const iuranwajibj=[datas,jsoniuranwajibinternal]
// const wasrikj=[datas,jsonwasrikinternal]
// const kepesertaanj=[datas,jsonkepesertaaninternal]
// const rbuj=[jsonrbu,datas]
// const edabuj=[jsonedabu,jsonedabuinternal]
// const sippj=[jsonsipp,jsonsippinternal]
// const cstij=[datas,jsoncstiinternal]
// const mobilejknj=[jsonmobilejkn,datas]

// const jsontotal=[
//   boaj,lupisj,pcarej,vclaimj,vdj,hfisj,antreanonlinej,apotekonlinej,keuanganj,
//   newinmonicaj,iuranwajibj,wasrikj,kepesertaanj,rbuj,edabuj,sippj,cstij,mobilejknj
// ]

// const useStyles = makeStyles((theme) => ({
//  tipografi:{
//    fontSize:16,
//    fontWeight:'bold'
//  }
// }));

// const test = menulinkkom.map((item,index) => {
//     if(index % 2 === 0){
//       if(profiltot[index/2].length === 1){
//         return (
//           <div>404 Site Not Found</div>
//         )
//       }
//       else {
//         return (
//           <Responsive datatotalgrafik={profiltot[index/2]}/>
//         )
//       }
//     }
//     else {
//       if(profiltot[(index-1)/2].length === 1){
//         return (
//           <div>404 Site Not Found</div>
//         )
//       }
//       else {
//         return (
//           <Filter datares={datares[(index-1)/2]}/>
//         )
//       }
//     }
  
// })

function App() {
  // const classes=useStyles()

  return (
    <div className="App">
      <Header1/>


      {/* Layouting dibawah header */}
      <Switch>
        <Route exact path='/penilaianbpjs' component = {Home} />

        {menulinkkom.map((item,index)=> {
          return(
            <Route exact path={item}>
              {/* <Layout2 judul={judulmenutotal[index]}
              deskripsi={deskripsimenutotal[index]}
              datatotal={datatotal[index]}
              jsontotal={jsontotal[index]}
              /> */}
              
            {/* <Typography className={classes.tipografi} >{judulmenutotal[Math.floor(index/4)]}</Typography> */}
              {/* {index % 2 === 0 && profiltot[index/2].length===1 ? 
                <div>404 Site Not Found</div>
                :
                index % 2 === 0 && profiltot[index/2].length!==1 ?
                <Responsive datatotalgrafik={profiltot[index/2]}/>
                :
                index % 2 !==0 && datares[(index-1)/2].length=== 1 ?
                <div>404 Site Not Found</div>
                :
                <Filter jsontotal={datares[(index-1)/2]}/>
              } */}

              {/* {index % 2 === 0 ?
                <Responsive datatotalgrafik={profiltot[index/2]}/>
                :
                <Filter jsontotal={datares[(index-1)/2]}/>
              } */}

              {index % 2 === 0 ?
                <ProfilResponden datatotalgrafik={profiltot[index/2]} jsontotal={datares[(index)/2]}/>
                :
                <DataResponden datares={datares[(index-1)/2]}/>
              }

  
            </Route>
          )
        })}
      </Switch>
     
    </div>
  )
}

export default App
