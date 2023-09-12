"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Suspense } from "react";
import { asyncapplyinternshipstudent, asyncapplyjobstudent } from "@/store/Actions/studentActions";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  const dispatch = useDispatch();
  const { student, jobs, internships } = useSelector(
    (state) => state.studentReducer
  );

  const ApplyJobHandler = async (id) => { 
    dispatch(asyncapplyjobstudent(id));
  };
  const ApplyInternshipHandler = async (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };
  return (
    <div className="container mt-5">
      <ul className="position-relative list-group ">
        <h1>
          Available jobs for <strong>{student && student.firstname}</strong>
        </h1>
        {jobs &&
          jobs.map((job, i) => (
            <div className="list-group-item text-wrap p-5" key={job._id}>
              {JSON.stringify(job)}
              <br />
              <br />
              {!job.students.includes(student && student._id) ? (
                <button
                  onClick={() => ApplyJobHandler(job._id)}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              ) : (
                <button className="btn btn-primary">Applied</button>
              )}
            </div>
          ))}
      </ul>

      <hr />

      
      <ul className="list-group">
      <h1>
        Available Internships for{" "}
        <strong>{student && student.firstname}</strong>
      </h1>
        {internships &&
          internships.map((internship, i) => (
            <div className="list-group-item p-5" key={internship._id}>
              {JSON.stringify(internship)}
              <br />
              <br />
              {!internship.students.includes(student && student._id) ? (
                <button
                  onClick={() => ApplyInternshipHandler(internship._id)}
                  className="btn btn-primary"
                >
                  Apply
                </button>
              ) : (
                <button className="btn btn-primary">Applied</button>
              )}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
