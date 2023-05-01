// eslint-disable-next-line no-unreachable
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import { Typography, Box, Grid, TextField } from "@mui/material";

export default function FormOne(): JSX.Element {
  const submitForm = (a1: any, a2: any) => {};
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container item xs={12} justifyContent="center">
        <Grid container item xs={12}>
          <Typography> Test Form For Validation</Typography>
        </Grid>
        <Formik initialValues={{}} onSubmit={submitForm}>
          {() => (
            <Form>
              <Grid container item xs={12} direction='column'>
                <Grid xs={12} >
                  <Grid xs={4} spacing={2}>
                    <Field as={TextField} />
                  </Grid>
                  <Grid xs={4}>
                    <Field as={TextField} />
                  </Grid>
                  <Grid xs={4}>
                    <Field as={TextField} />
                  </Grid>
                </Grid>
                <Grid xs={12} >
                  <Grid xs={4} spacing={2}>
                    <Field as={TextField} />
                  </Grid>
                  <Grid xs={4}>
                    <Field as={TextField} />
                  </Grid>
                  <Grid xs={4}>
                    <Field as={TextField} />
                  </Grid>
                </Grid>
                {/* Address  */}
                <Grid xs={12}></Grid>
                {/* Line item Form */}
                <Grid xs={12}></Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Box>
  );
}
