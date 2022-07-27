import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';



import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";

import ResultsDisplay from './Components/ResultsDisplay'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


function App(props) {

  const navigate = useNavigate()
  const location = useLocation()


  const [results, setResults] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    console.log(location)
    const pageFromParam = location.search.split('?page=')[1]

    var currentPage = 1
    if (parseInt(pageFromParam)) {
      currentPage = (parseInt(pageFromParam) > 10) ? 10 : parseInt(pageFromParam)
    }


    setPage(currentPage)
    navigate('?page=' + currentPage)




    axios.get('https://api.github.com/repositories')
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          setResults(res.data)
        }
      })
  }, [])





  function handleChange(event, value) {
    setPage(value);
    navigate('?page=' + value)
    window.scrollTo(0, 0)
  }

  function resultsForPage(page) {
    if (results) {
      const smth = results.slice(10 * (page - 1), 10 * page)
      return smth
    }
    return null
  }



  return (

    <Grid container>
      <Grid item xs={1} md={3} lg={3}></Grid>
      <Grid item xs={10} md={6} lg={6}>
        <h1 className="App-title">Github Repositories</h1>
        {results ?
          <ResultsDisplay data={resultsForPage(page)} />
          : null}

        <div style={{ marginTop: 30 }}>
          <Pagination page={page} count={10} size="large" onChange={handleChange} />
        </div>

      </Grid>



      <Grid item xs={1} md={3} lg={3} ></Grid>

    </Grid>

  );
}

export default App;
