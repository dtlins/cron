import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import DescriptionForm from "../DescriptionForm/DescriptionForm";
import styles from "./App.module.css";

function App() {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={5}
      className={styles.App}
      style={{ margin: "auto" }}
    >
      <Grid item className="App-header">
        <h1>Cron Expression Descriptor</h1>
        <p>Describe Cron expressions as human readable text</p>
      </Grid>
      <Grid item className="App-main">
        <DescriptionForm />
      </Grid>
    </Grid>
  );
}

export default App;
