import './App.css';
import React, { Fragment, useEffect, useState } from "react";
import { Button, Grid } from '@material-ui/core'
import Navbar from './components/Navbar';
import { getMatches } from './api/Api';
import MyCard from './components/MyCard';

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches)
      })
      .catch((error) => console.log("could not load data", error))
  }, [])


  return (
    <div className="App">
      <Navbar />

      <h3>Love T-20 Cricket, Get all the information on upcoming matches of the fast paced version of the sport we all love </h3>

      <Grid container>
        <Grid item sm={3}></Grid>


        <Grid item sm={6}>
          {
            matches.map((match) => (
              <Fragment>
                {
                  match.type == "Twenty20" ? (<MyCard key={match.unique_id} match={match} />) : ("")
                }
              </Fragment>
            ))
          }
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
