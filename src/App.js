import React from 'react';
import './App.css';
import Header1 from './component/header/Header1';

import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Layout from './component/layout/Layout'

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

import {menulinktotal,judulmenutotal,deskripsimenutotal} from './component/header/arraymenu';

import datas from './component/data/dataapotekonline.json';
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




// import {datatotalgrafik} from './DataChart'
// import InputCoba from './component/InputCoba'

const datatotal = [
  datatotalgrafik,datalupis,datapcare,
  datavclaim,datatotalgrafik,datahfis,
  dataantreanonline,dataapotekonline,datatotalgrafik,
  datatotalgrafik,datatotalgrafik,datatotalgrafik,
  datatotalgrafik,datarbu,dataedabu,
  datasipp,datatotalgrafik,datamobilejkn
]

const jsontotal =[
  datas,jsonlupis,jsonpcare,
  jsonvclaim,datas,jsonhfis,
  jsonantreanonline,jsonapotekonline,datas,
  datas,datas,datas,
  datas,jsonrbu,jsonedabu,
  jsonsipp,datas,jsonmobilejkn
]

function App() {
  return (
    <div className="App">
      <Header1/>


      {/* Layouting dibawah header */}
      <Switch>
        <Route exact path='/penilaianbpjs' component = {Home} />

        {menulinktotal.map((item,index)=> {
          return(
            <Route exact path={item}>
              <Layout judul={judulmenutotal[index]}
              deskripsi={deskripsimenutotal[index]}
              datatotal={datatotal[index]}
              jsontotal={jsontotal[index]}
              />
            </Route>
          )
        })}
      </Switch>
    </div>
  )
}

export default App
