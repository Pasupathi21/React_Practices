import { useState } from "react";

import { TextFieldWrapper, AutoCompleteWrapper } from "../ui-materials/inputFields";

import {
  Box,
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Formik, Field, FieldArray, Form } from "formik";

export const SimpleForm = (formProps: any) => {
  const submitAction = (formValues: {}, formActions: Record<any, any>) => {
    console.log("formvalue", formValues);
  };
  const [data, setState] = useState({
    firstName: '',
    middleName: '',
    lastName: ''
  })

  const [autoData, autoState] = useState([
    {
      id: 1,
      label: 'Test 1'
    },
    {
      id: 2,
      label: 'Test 2'
    },
    {
      id: 3,
      label: 'Test 3'
    }
  ])
  console.log('data', data)
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography> Simple Multi line form</Typography>
          <TextFieldWrapper 
          type="text"
          name="firstName"
          variant="outlined"
          label="FirstName"
          onChange={(e: any)=> setState((pre)=> {
            return { ...pre, [e.target.name]: e.target.value}
          })}
          />
          <TextFieldWrapper 
          type="text"
          name="middleName"
          variant="outlined"
          label="MiddleName"
          />
          <TextFieldWrapper 
          type="text"
          name="lastName"
          variant="outlined"
          label="LastName"
          />
          <AutoCompleteWrapper 
          options={autoData}
          labelname='Test'
          />

        </CardContent>
      </Card>
    </>
  );
};
