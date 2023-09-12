import axios from "@/utils/axios";
import {
  addstudent,
  addjobs,
  addinternships,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
   dispatch(addstudent(data.student)); 
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
 
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup",student);
    dispatch(asynccurrentstudent());


    
  } catch (error) {
    dispatch(iserror(error.response.data));

    
  }
  
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin",student);
  // console.log(data);
  dispatch(asynccurrentstudent());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
  // console.log(data);
  dispatch(removestudent());
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {

    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/"+_id,student);
  // console.log(data);
  dispatch(asynccurrentstudent());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
  try {

    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/"+_id,avatar);
  // console.log(data);
  dispatch(asynccurrentstudent());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncresetpasswordstudent = (password) => async (dispatch, getState) => {
  try {

    const {_id} = getState().studentReducer.student;
    const { data } = await axios.post("/student/reset-password/"+_id,password);
  // console.log(data);
  dispatch(asynccurrentstudent());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncforgetpasswordstudent = (email) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/send-mail/",email);
  dispatch(asynccurrentstudent());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/forget-link/",pwd);
  dispatch(asynccurrentstudent());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


// read all jobs
export const asyncalljobs = () => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/alljobs/");
    dispatch(addjobs(data.jobs));


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  


// read all internships


export const asyncallinternships = () => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/allinternships/");
    dispatch(addinternships (data.internships));


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  


export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/apply/job/" + id);
  dispatch(asynccurrentstudent());
  dispatch(asyncalljobs());



    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
}; 
export const asyncapplyinternshipstudent = (id) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/student/apply/internship/" + id);
  dispatch(asynccurrentstudent());
  dispatch(asyncallinternships());



    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  



export const asyncaddeducation = (education) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/resume/add-edu" ,education);
  dispatch(asynccurrentstudent());
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  

export const asyncdeleteeducation = (id) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/resume/delete-edu/"+id);
  dispatch(asynccurrentstudent());
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  



export const asyncediteducation = (id,education) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/resume/edit-edu/"+id,education);
  dispatch(asynccurrentstudent());  
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};  
