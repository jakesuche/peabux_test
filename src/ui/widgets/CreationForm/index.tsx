import React, { useState } from 'react'

import { GridContainer, GridItem } from 'ui/atoms/Grid';
import { TextInput } from 'ui/atoms/TextInput';
import TabController from 'ui/components/TabController';
import { Form } from './index.styled';
import { Button } from 'ui/atoms/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataProps, defaultValues } from 'utils/schema';
import { validateDateOfBirth } from 'utils/comon';
import { tabs } from 'pages';
import { Typography } from 'ui/atoms/Typography';


type Iprops = keyof typeof defaultValues;


 const titles = ["Mr", "Mrs", "Miss", "Dr", "Prof"]; 


function CreationForm() {
const [activeTab, setActiveTab] = useState(tabs[0]);


const {register, handleSubmit, control, formState:{errors} } = useForm({
  defaultValues,
  mode:'all'
});


const handleError = (value: Iprops) => {
  return {
    errorText: errors[value]?.message,
    isValid: !errors[value]?.message,
  };
};

const handleCreateUser: SubmitHandler<FormDataProps> = (data) => {
  console.log(data);
};
  

  return (
    <>
      <GridItem xs={12} md={12}>
        <TabController
          setActiveTab={(e) => setActiveTab(e)}
          tabs={tabs}
          activeTab={activeTab}
        />
      </GridItem>

      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <GridContainer>
          {activeTab.key == "Teachers" && (
            <GridItem xs={4} md={4}>
              <label>Title</label>
              <select {...register("title", { required: "Title is required" })}>
                <option selected disabled>
                  Select a Title
                </option>
                {titles.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <Typography size='xs' color='error500'>
                {handleError('title').errorText}
              </Typography>
            </GridItem>
          )}
          <GridItem xs={8} md={8}>
            <TextInput
              {...handleError("name")}
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              label="Name"
            />
          </GridItem>
          <GridItem xs={12} md={12}>
            <TextInput
              {...handleError("surname")}
              {...register("surname", { required: "Surname is required" })}
              placeholder="Surname"
              label="Surname"
            />
          </GridItem>
          <GridItem xs={12} md={12}>
            <TextInput
              {...handleError("dob")}
              {...register("dob", {
                required: "Dirth of birth is required",
                validate: (value) => validateDateOfBirth(value, activeTab.key),
              })}
              type="date"
              label="Date of Birth"
            />
          </GridItem>
          <GridItem xs={12} md={12}>
            <TextInput
              {...handleError("nationalId")}
              {...register("nationalId", {
                required: "National id is required",
              })}
              placeholder="National Id"
              label="National ID"
            />
          </GridItem>

          {activeTab.key == "Teachers" ? (
            <>
              <GridItem xs={12} md={12}>
                <TextInput
                  placeholder="Teacher's Number"
                  label="Teacher Number"
                  {...handleError("teacherNumber")}
                  {...register("teacherNumber", {
                    required: "Teacher's number  is required",
                  })}
                />
              </GridItem>
              <GridItem xs={12} md={12}>
                <TextInput
                  {...handleError("salary")}
                  {...register("salary", { required: "Saraly is required" })}
                  placeholder="Salary"
                  label="Salary"
                />
              </GridItem>
            </>
          ) : (
            <GridItem xs={12} md={12}>
              <TextInput
                {...handleError("studentNumber")}
                {...register("studentNumber", {
                  required: "Student number is required",
                })}
                placeholder="Student number"
                label="Student Number"
              />
            </GridItem>
          )}
        </GridContainer>
        <Button borderRadius="0.5rem" variant="solid">
          Create Teacher
        </Button>
      </Form>
    </>
  );
}

export default CreationForm;