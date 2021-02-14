import React, { useEffect, useState } from "react";
import styles from "./DescriptionForm.module.css";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";

const DescriptionForm: React.FC = () => {
  const [description, setDescription] = useState();
  const [cron, setQuery] = useState("0 18 ? * MON-FRI");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const url =
        process.env.NODE_ENV === "development" ? "http://localhost:7071/" : "/";
      try {
        const result = await axios(`${url}api/DescribeExpression/`, {
          params: {
            expression: search,
          },
        });
        setDescription(result.data);
      } catch (error) {
        setDescription(error.response.data);
      }
    }
    if (search) fetchData();
  }, [search]);

  return (
    <form
      data-testid="DescriptionForm"
      className={styles.DescriptionForm}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item>
          <TextField
            variant="outlined"
            label="Cron Expression"
            fullWidth
            value={cron}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="default"
            onClick={() => setSearch(cron)}
          >
            Describe
          </Button>
        </Grid>
        <Grid item style={{ marginTop: 30 }}>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default DescriptionForm;
