import { createSlice } from "@reduxjs/toolkit";
import unknown from "../Image/unknown.jpg"

interface FormValues {
    mailAddress: string;
    password: string;
    confirmPassword: string;
    nickName: string;
    userIconImage: string;
};

interface FormErrors {
    mailAddress: string;
    password: string;
    confirmPassword: string;
    nickName: string;
    userIconImage: string;
};


const initialState = {
    formData:{
        mailAddress:"",
        password:"",
        confirmPassword:"",
        nickName:"",
    },
    formError:{
        mailAddress:"",
        password:"",
        confirmPassword:"",
        nickName:"",
    },
    imageIcon:unknown,
    fileError:"",
    submit:false
};

const formSlice = createSlice ({
    name:'form',
    initialState,
    reducers:{
        setFormData:(state, action) => {
            state.formData = action.payload;
        },
        setFormError:(state,action) => {
            state.formError = action.payload;
        },
        setImageIcon:(state,action) => {
            state.imageIcon = action.payload;
        },
        setFileError:(state,action) => {
            state.fileError = action.payload;
        },
        setSubmit:(state, action) => {
            state.submit = action.payload;
        }
    }
});

export const {setFormData, setFormError, setImageIcon, setFileError, setSubmit} = formSlice.actions;
export const selectFormData = (state: { form: { formData: FormValues; }; }) => state.form.formData;
export const selectFormError = (state: {form:{ formError: FormErrors; };}) => state.form.formError;
export const selectImageIcon = (state: {form: {imageIcon: string;};}) => state.form.imageIcon;
export const selectFileError = (state: {form: {fileError: string;};}) => state.form.fileError;
export const selectSubmit = (state: {form: {submit:boolean;};}) => state.form.submit;
export default formSlice.reducer;