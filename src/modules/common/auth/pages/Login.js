import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../Actions";

const initialValues = {
  username: "",
  password: "",
};

const loginValidationSchema = yup.object().shape({
  name: yup.string().required().min(3, " min 3 characters length"),
  phone: yup.string().required(),
});
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <Box
      sx={{
        maxWidth: "540px",
        minWidth: "540px",
        textAlign: "center",
        top: "50%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box sx={{ marginBottom: "60px" }}>
        <Typography
          variant="body 2"
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "34px",
            color: "#FFA321",
          }}
        >
          Admin
        </Typography>
        <Typography
          variant="body 2"
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "34px",
            color: "#EFEFEF",
          }}
        >
          Dashboard
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "28px",
            color: "#EFEFEF;",
          }}
        >
          Sign in to your account
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        validateOnBlur
        // onSubmit={onSubmit}
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
          console.log(values) || (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                <TextField
                  sx={{ marginBottom: "18px" }}
                  name="username"
                  type="text"
                  label="Your name"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={
                    touched.username && errors.username && "Not a Name"
                  }
                  autoComplete="name"
                />
                <TextField
                  sx={{ marginBottom: "18px" }}
                  name="password"
                  type="text"
                  label="Your password"
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password}
                  helperText={
                    touched.password && errors.password && "Pattern :"
                  }
                />
              </Box>
              <Button
                type="submit"
                sx={{
                  fontFamily: "Urbanist",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "28px",
                  color: "#EFEFEF",
                  border: "2px solid #FFA321",
                  padding: "18px 0",
                  borderRadius: "6px",
                  textTransform: "none",
                  minWidth: "100%",
                }}
              >
                Sign in
              </Button>
            </Form>
          )
        }
      </Formik>
    </Box>
  );
}

export default Login;
