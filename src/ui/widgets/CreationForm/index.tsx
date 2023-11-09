import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { GridContainer, GridItem } from "ui/atoms/Grid";
import { TextInput } from "ui/atoms/TextInput";
import TabController from "ui/components/TabController";
import { Form } from "./index.styled";
import { Button } from "ui/atoms/Button";
import { FormDataProps, defaultValues } from "utils/schema";
import { allowOnlyNumber, validateDateOfBirth } from "utils/comon";
import { TabsProps, tabs } from "pages";
import { Typography } from "ui/atoms/Typography";
import useCreateUser from "lib/useCreateUser";
import Box from "ui/atoms/Box";

type Iprops = keyof typeof defaultValues;
type componentProps = {
  setActiveTab: Dispatch<SetStateAction<TabsProps>>;
  onClose: () => void;
  activeTab: TabsProps;
};

const titles = ["Mr", "Mrs", "Miss", "Dr", "Prof"];

function CreationForm({ onClose, setActiveTab, activeTab }: componentProps) {
  const { mutate: createUser, isError, error, isSuccess } = useCreateUser();
  const errorMessage = error?.response.data.error;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "all",
  });

  const handleError = (value: Iprops) => {
    return {
      errorText: errors[value]?.message,
      isValid: !errors[value]?.message,
    };
  };

  const handleCreateUser: SubmitHandler<FormDataProps> = (data) => {
    data.type = activeTab.key === "Teachers" ? "teacher" : "student";
    createUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

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
        {isError && (
          <Box mt={5} backgroundColor="pink">
            <Typography color="error600">{errorMessage}</Typography>
          </Box>
        )}
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
              <Typography size="xs" color="error500">
                {handleError("title").errorText}
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
            <Controller
              control={control}
              name="nationalId"
              rules={{
                required: "National id is required",
                minLength: {
                  value: 11,
                  message: "National id be at 11 characters",
                },
              }}
              render={({ field: { onChange, ...rest } }) => (
                <TextInput
                  {...handleError("nationalId")}
                  placeholder="National Id"
                  label="National ID"
                  {...rest}
                  maxLength={11}
                  onChange={(e) => onChange(allowOnlyNumber(e.target.value))}
                />
              )}
            />
          </GridItem>

          {activeTab.key == "Teachers" ? (
            <>
              <GridItem xs={12} md={12}>
                <Controller
                  control={control}
                  name="teacherNumber"
                  rules={{
                    required: "Teacher's number  is required and must be 6",
                    minLength: {
                      value: 6,
                      message: "Teacher must be at 6 characters",
                    },
                  }}
                  render={({ field: { onChange, ...rest } }) => (
                    <TextInput
                      {...handleError("teacherNumber")}
                      placeholder="Teacher's Number"
                      label="Teacher's Number"
                      {...rest}
                      maxLength={6}
                      onChange={(e) =>
                        onChange(allowOnlyNumber(e.target.value))
                      }
                    />
                  )}
                />
              </GridItem>
              <GridItem xs={12} md={12}>
                <TextInput placeholder="Salary" label="Salary (optional)" />
              </GridItem>
            </>
          ) : (
            <GridItem xs={12} md={12}>
              <Controller
                control={control}
                name="studentNumber"
                rules={{
                  required: "Student number is required",
                  minLength: {
                    value: 6,
                    message: "Student number must be at 6 characters",
                  },
                }}
                render={({ field: { onChange, ...rest } }) => (
                  <TextInput
                    {...handleError("studentNumber")}
                    placeholder="Student number"
                    label="Student Number"
                    {...rest}
                    maxLength={6}
                    onChange={(e) => onChange(allowOnlyNumber(e.target.value))}
                  />
                )}
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
