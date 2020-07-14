import React from 'react';
import './App.css';
import Header1 from './component/header/Header1';

import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Layout from './component/layout/Layout'

import {menulinktotal,judulmenutotal,deskripsimenutotal} from './component/header/arraymenu';

import InputCoba from './component/InputCoba'

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
              />
            </Route>
          )
        })}
      </Switch>

      <InputCoba />
    </div>
  )
}

export default App
