import React, { useState } from 'react'

import { GridContainer, GridItem } from 'ui/atoms/Grid';
import { TextInput } from 'ui/atoms/TextInput';
import TabController from 'ui/components/TabController';
import { InputsGroup } from './index.styled';
import { Button } from 'ui/atoms/Button';
import { useForm } from 'react-hook-form';
import { defaultValues } from 'utils/schema';



const tabs = [{ key: "As a teacher" }, { key: "As a student" }];
 const titles = ["Mr", "Mrs", "Miss", "Dr", "Prof"]; 


function CreationForm() {
const [activeTab, setActiveTab] = useState(tabs[0]);


const {register, handleSubmit, control, formState:{errors} } = useForm({
  defaultValues,
});
  

  return (
    <>
      <GridItem xs={12} md={12}>
        <TabController
          setActiveTab={(e) => setActiveTab(e)}
          tabs={tabs}
          activeTab={activeTab}
        />
      </GridItem>
     
        <InputsGroup>
          <GridContainer>
            {activeTab.key == "As a teacher" && (
              <GridItem xs={4} md={4}>
                <label>Title</label>
                <select>
                  <option selected disabled>
                    Select a Title
                  </option>
                  {titles.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </GridItem>
            )}
            <GridItem xs={8} md={8}>
              <TextInput placeholder="Name" label="Name" />
            </GridItem>
            <GridItem xs={12} md={12}>
              <TextInput placeholder="Surname" label="Surname" />
            </GridItem>
            <GridItem xs={12} md={12}>
              <TextInput type="date" label="Date of Birth" />
            </GridItem>
            <GridItem xs={12} md={12}>
              <TextInput placeholder="National Id" label="National ID" />
            </GridItem>

            {activeTab.key == "As a teacher" ? (
              <>
                <GridItem xs={12} md={12}>
                  <TextInput
                    placeholder="Teacher's Number"
                    label="Teacher Number"
                  />
                </GridItem>
                <GridItem xs={12} md={12}>
                  <TextInput placeholder="Salary" label="Salary" />
                </GridItem>
              </>
            ) : (
              <GridItem xs={12} md={12}>
                <TextInput
                  placeholder="Student number"
                  label="Student Number"
                />
              </GridItem>
            )}
          </GridContainer>
          <Button borderRadius="0.5rem" variant="solid">
            Create Teacher
          </Button>
        </InputsGroup>
    </>
  );
}

export default CreationForm;