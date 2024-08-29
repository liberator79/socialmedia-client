import { useState } from "react";
import { setUser } from "../store/app";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";


const Form = () => {
    const loginSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
    });

    const initialValuesLogin = {
        email: "",
        password: "",
    };

    const handleSubmit = () => {

    }
    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}
        >
            {
                
            }
        </Formik>
    )
}
export default Form