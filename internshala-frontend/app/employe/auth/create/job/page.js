"use client"
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import { removeerror } from "@/store/Reducers/employeReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {

    const {errors}=useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();

  const router = useRouter();



  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [jobtype, setJobtype] = useState(null);
  const [openings, setOpenings] = useState(Number);
  const [description, setDescription] = useState("");
  const [preferences, setPreferences] = useState("");
  const [salary, setSalary] = useState(Number);
  const [perks, setPerks] = useState("");
  const [assessments, setAssessments] = useState("");



  const JobTypehandler = (event) => {
    // console.log(event.target.value);
    setJobtype(event.target.value);
};
console.log(jobtype);

  const CreateJobHandler = (e) => {
    e.preventDefault();
    const job = {
      title: title,
      skill: skill,
      jobtype: jobtype,
      openings: openings,
      description: description,
      preferences: preferences,
      salary: salary,
      perks: perks,
      assessments: assessments,
    };
    dispatch(asynccreatejobemploye(job));

    setTitle("")
setSkill("")
setJobtype("")
setOpenings("")
setDescription("")
setPreferences("")
setSalary("")
setPerks("")
setAssessments("")

    

    
  };


  if (errors.length > 0) {
    errors.map((e, i) => {
        toast.error(e.errName +" - Fill all Details", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            }
            );
    });
    dispatch(removeerror());
}

  return (
    <div className="container mt-5">


<form onSubmit={CreateJobHandler}>
        <h5>Title</h5>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <h5>Skill</h5>
        <input
          type="text"
          name="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <br />
        <h5>Job Type</h5>
        {/* // ! Job TYPE */}
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="JOBTYPE"
            value="In office"
            onChange={JobTypehandler}
          />
          <label>In office</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="JOBTYPE"
            value="Remote"
            onChange={JobTypehandler}
          />
          <label>Remote</label>
        </div>

        {/* // ! Job TYPE  */}
        

        
        <br />

        <h5>Openings</h5>

        <input
          type="text"
          name="openings"
          value={openings}
          onChange={(e) => setOpenings(e.target.value)}
        />
        <br />
        <br />
        <h5>Description</h5>

        <input
          type="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <h5>Preferences</h5>
        <input
          type="text"
          name="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
        <br />
        <h5>Salary</h5>
        <input
          type="text"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <h5>Perks</h5>
        <input
          type="text"
          name="perks"
          value={perks}
          onChange={(e) => setPerks(e.target.value)}
        />
        <br />
        <h5>Assessments</h5>
        <input
          type="text"
          name="assessments"
          value={assessments}
          onChange={(e) => setAssessments(e.target.value)}
        />
        <br />
        <br />

        <button className="btn btn-primary">Create Job</button>
      </form>
    </div>
  );
};

export default page;
