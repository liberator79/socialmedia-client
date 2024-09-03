import { useState } from "react";
import { setUser } from "../store/app";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";


const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = async (values, onSubmitProps) => {
        console.log(values, onSubmitProps)
        const loggedInResponse = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        console.log(loggedInResponse)
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatch(
                setUser({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/");
        }
    };
    const loginSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
    });

    const initialValuesLogin = {
        email: "",
        password: "",
    };

    const handleSubmit = async (values, onSubmitProps) => {
        await login(values, onSubmitProps);
        console.log("Log")
    }
    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="w-[100%] flex justify-center items-center p-10">
                        <div className="min-w-[50%] max-w-[70%]">
                            <Stack spacing={3}>
                                <TextField
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={Boolean(touched.email) && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    error={Boolean(touched.password) && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <Button variant="contained" type="submit">LOGIN</Button>
                                <div className="underline cursor-pointer text-white">Don't have an account? Sign Up here.</div>
                            </Stack>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}
export default Form


/*


<Box
            display="grid"
            gap="30%"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: undefined},
            }}
          >

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box>
            <Button
              fullWidth
              type="submit"
            >
               LOGIN
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
            >
                Don't have an account? Sign Up here.
            </Typography>
          </Box>

*/
