// eslint-disable-next-line no-unreachable
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Divider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  List,
  ListItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { initValue } from "../dev-data/form-one";
import { formOneSchema } from '../validation-schema/form-one';

const gender = [
  {
    label: "Male",
    value: "M",
  },
  {
    label: "Female",
    value: "F",
  },
  {
    label: "Other",
    value: "O",
  },
];

const checkBox = [
  {
    label: "Check 1",
    value: "c1",
  },
  {
    label: "Check 2",
    value: "c2",
  },
  {
    label: "Check 3",
    value: "c3",
  },
];
const select = [
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "IND",
    value: "ind",
  },
  {
    label: "AFG",
    value: "afg",
  },
  {
    label: "PAK",
    value: "pak",
  },
  {
    label: "ENG",
    value: "eng",
  },
  {
    label: "NZW",
    value: "nzw",
  },
];

const autoCom = [
  {
    label: "TN",
    value: "tn",
  },
  {
    label: "UP",
    value: "up",
  },
  {
    label: "KRL",
    value: "krl",
  },
  {
    label: "ANDR",
    value: "andr",
  },
  {
    label: "JAM",
    value: "jam",
  },
  {
    label: "BHR",
    value: "bhr",
  },
];

const skill = [
  {
    label: 'JS',
    value: 'js'
  },
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'JAVA',
    value: 'java'
  },
  {
    label: 'Python',
    value: 'python'
  }
]

const expLevel = [
  {
    label: 'One Year',
    value: 1
  },
  {
    label: 'Two Years',
    value: 2
  },
  {
    label: 'Three Years',
    value: 3
  },
  {
    label: 'Four Years',
    value: 4
  }
]

export default function FormOne(): JSX.Element {
  const [schema, setSchema] = useState<any>(formOneSchema())
  const submitForm = (a1: any, a2: any) => {
    console.log("form submitted", a1);
  };
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
      <Grid container item xs={12} justifyContent="center" spacing={2}>
        <Grid container item xs={12} justifyContent="center">
          <Typography> Test Form For Validation</Typography>
        </Grid>
        <Grid container item xs={12} sx={{ width: "100%" }} spacing={1}>
          <Formik initialValues={initValue} onSubmit={submitForm} validationSchema={schema}>
            {({ values, errors, setFieldValue, touched }) => (
              <Form
                style={{
                  width: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px",
                }}
              >
                <Grid container item xs={12} sx={{ width: "100%" }} spacing={2}>
                  <Grid container item xs={12} spacing={2}>
                    <Grid xs={4} container item>
                      {/*  Name */}
                      <Field
                        as={TextField}
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={values.name}
                        error={ Boolean(errors.name) && touched.name}
                        helperText={touched.name ? errors.name : ''}
                      />
                    </Grid>
                    <Grid container item xs={4}>
                      {/* Date */}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Field
                          as={DatePicker}
                          fullWidth
                          name="dob"
                          value={values.dob}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid container item xs={4}>
                      {/* Radio */}
                      <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name="gender">
                          {gender.map((gender, gI) => (
                            <Field
                              key={gI}
                              as={Radio}
                              value={gender.value}
                            >
                            </Field>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      {/* <Field as={TextField} fullWidth /> */}
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid xs={4} container item>
                      <FormControl>
                        <FormLabel> Select Check</FormLabel>
                        <FormGroup row>
                          {checkBox.map((ch, cI) => (
                            <FormControlLabel
                              key={cI}
                              control={<Field as={Checkbox} name="checkbox" />}
                              label={ch.label}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                    </Grid>
                    <Grid container item xs={4}>
                      <FormControl fullWidth>
                        <Field
                          as={TextField}
                          select
                          variant="outlined"
                          label="Select country"
                          name="country"
                        >
                          {select.map((sl, sI) => (
                            <MenuItem value={sl.value} key={sI}>
                              {sl.label}
                            </MenuItem>
                          ))}
                        </Field>
                      </FormControl>
                      {/* <Field as={TextField} fullWidth /> */}
                    </Grid>
                    <Grid container item xs={4}>
                      <Field
                        as={Autocomplete}
                        fullWidth
                        options={autoCom}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            label="select state"
                            variant="outlined"
                          />
                        )}
                        name="state"
                        onChange={(_: any, newVal: any) => {
                          setFieldValue("state", newVal);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid xs={12} container item>
                      <Field
                        as={TextField}
                        fullWidth
                        multiline
                        row={5}
                        maxRow={7}
                        label="Address"
                        variant="outlined"
                        name="address"
                        error={ Boolean(errors.address) && touched.address}
                        helperText={touched.address ? errors.address : ''  }
                      />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Divider style={{ border: "2px solid blue" }} />
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Button variant="contained" onClick={()=> {
                      values.skills.push({
                        skill: {
                            label: '',
                            value: 0
                        },
                        experience: {
                            label: '',
                            value: 0
                        },
                    })
                    }}>ADD</Button>
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <FieldArray
                    name="skills"
                    render={({push, remove}) => (
                      values.skills.map((_, skI) => (
                        <Grid container item xs={12} key={skI} spacing={2}>
                          <Grid container item xs={2} justifyContent="center" alignContent="cenetr">
                            <Typography variant="body2">{skI + 1}</Typography>
                          </Grid>
                          <Grid container item xs={4}>
                            <Field as={Autocomplete} options={skill} renderInput={(params: any) => (
                          <TextField
                            {...params}
                            label="select skill"
                            variant="outlined"
                            fullWidth
                           
                          />
                        )}
                        name="skill"
                        fullWidth
                        onChange={(_: any, nVal: any) => {
                          // setFieldValue(`skills[${skI}]`, nVal)
                          values.skills[skI] = nVal
                        }}
                        />
                          </Grid>
                          <Grid container item xs={4}>
                          <Field as={Autocomplete} options={expLevel} renderInput={(params: any) => (
                          <TextField
                            {...params}
                            label="select experience level"
                            variant="outlined"
                          />
                        )}
                        name="explevel"
                        fullWidth/>
                          </Grid>
                          <Grid container item xs={2}>
                            <Button variant="outlined" onClick={()=> remove(skI + 1)}>Delete</Button>
                          </Grid>
                        </Grid>
                      ))

                    )}
                    />
                  </Grid>
                  <Grid container item xs={12} spacing={2}>
                    <Grid xs={12} container item>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Last submit button */}
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
}
