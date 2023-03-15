import React from "react";
import { Form, Formik } from "formik";
import "./ReservationForm.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import { Alert, Box, Button, Dialog, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const initialValues = {
  name: "",
  phone: "",
  people: "",
  date: "",
  time: "",
  email: "",
};

const phoneRegExp = /^\+380\-\d{2}\-\d{3}\-\d{2}\-\d{2}$/;

const loginValidationSchema = yup.object().shape({
  name: yup.string().required().min(3, " min 3 characters length"),
  phone: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
  people: yup.number().required().positive().integer(),
  date: yup.date().required().min("02-23-2023"),
  time: yup
    .string()
    .required()
    .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, "Invalid time format"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
function ReservationForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit(values) {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    handleClickOpen();
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        "@media (max-width:1350px)": {
          justifyContent: "center",
          display: "block",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "636px",
          padding: "48px 111px",
          textAlign: "center",

          "@media (max-width:1350px)": {
            padding: "48px 0",
            margin: "0 auto",
          },
          "@media (max-width:800px)": {
            padding: "48px 0",
          },
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          validateOnBlur
          onSubmit={onSubmit}
        >
          {({
            props,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            isValid,
            handleSubmit,
            dirty,
          }) =>
            console.log(props, values) || (
              <Form>
                <Box
                  sx={{
                    minWidth: "635px",
                    "& label": {
                      color: "#EFEFEF;",
                      fontFamily: "Urbanist",
                    },
                    "& svg": {
                      fill: "#fff",
                    },
                    "& label.Mui-focused ": {
                      color: "#EFEFEF;",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFA321",
                    },
                    "& .MuiInput-underline": {
                      background: "inherit",
                      color: "#EFEFEF",
                      fontFamily: "Urbanist",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "28px",
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#FFA321",
                      borderBottomWidth: 2,
                    },
                    "& label.Mui-error": {
                      color: "#d32f2f",
                    },
                    "@media (max-width:600px)": {
                      flexDirection: "column",
                    },
                    "@media (max-width:800px)": {
                      display: "flex",
                      justifyContent: "space-between",
                      minWidth: "0",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "636px",
                      marginBottom: "40px",
                      "& input": { maxWidth: "192px" },
                      "@media (max-width:600px)": {
                        marginBottom: "0",
                        alignItems: "center",
                      },
                      "@media (max-width:800px)": {
                        "& .MuiTextField-root": { width: "192px" },
                        flexDirection: "column",
                      },
                    }}
                  >
                    <TextField
                      name="name"
                      type="text"
                      label="Your name"
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name && "Not a Name"}
                      autoComplete="name"
                    />
                    <TextField
                      name="phone"
                      type="tel"
                      label="Your phone"
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      error={touched.phone && errors.phone}
                      helperText={
                        touched.phone &&
                        errors.phone &&
                        "Pattern :+380-##-###-##-##"
                      }
                    />
                    <TextField
                      name="people"
                      type="text"
                      label="How many people"
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.people}
                      error={touched.people && Boolean(errors.people)}
                      helperText={
                        touched.people && errors.people && "Not a number"
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "40px",
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "636px",
                      "& input": { maxWidth: "192px" },
                      "@media (max-width:600px)": {
                        alignItems: "center",
                      },
                      "@media (max-width:800px)": {
                        "& .MuiTextField-root": { width: "192px" },
                        flexDirection: "column",
                      },
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        sx={{
                          "& .MuiInput-underline": { maxWidth: "192px" },
                          "& button": {
                            display: "none",
                          },
                        }}
                        label="Date"
                        onChange={(value) => {
                          setFieldValue("date", value.toDate(), true);
                        }}
                        value={values.date}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              maxWidth: "191px",
                            }}
                            error={touched.date && Boolean(errors.date)}
                            name="date"
                            variant="standard"
                            onBlur={handleBlur}
                            helperText={
                              touched.date && errors.date && "Incorrect entry."
                            }
                          />
                        )}
                      />
                    </LocalizationProvider>
                    <TextField
                      name="time"
                      type="text"
                      label="Time"
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.time}
                      error={touched.time && Boolean(errors.time)}
                      helperText={
                        touched.time && errors.time && "Pattern :**:** AM/PM"
                      }
                    />
                    <TextField
                      name="email"
                      type="text"
                      label="Email"
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)}
                      helperText={
                        touched.email && errors.email && "Incorrect Email."
                      }
                    />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  sx={{
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "22px",
                    lineHeight: "26px",
                    color: "#EFEFEF",
                    border: "2px solid #FFA321",
                    padding: "12px 32px",
                    borderRadius: "6px",
                    textTransform: "none",
                  }}
                >
                  Book a table
                </Button>
              </Form>
            )
          }
        </Formik>
      </Box>
      <Box
        className="image_reservation"
        sx={{
          maxWidth: "413px",
          "@media (max-width:1350px)": {
            display: "none",
          },
        }}
      >
        <img src="./image/coffee.jpg" alt="coffee" />
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        sx={{
          "& MuiPaper-root": { backgroundColor: "black" },
        }}
      >
        <Alert variant="filled" severity="success">
          Your reservation has been successfully created
        </Alert>
      </Dialog>
    </Box>
  );
}

export default ReservationForm;
