"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);

  return (
    <div className="container mt-5 ">
      <ul className=" list-group ">
        <h1>
          Applied jobs and Internships by{" "}
          <strong>{employe && employe.firstname}</strong>
        </h1>
        {employe &&
          employe.jobs.map((job, i) => (
            <div className="list-group-item text-wrap" key={job._id}>
              {JSON.stringify(job)}
            </div>
          ))}

        {employe &&
          employe.internships.map((internship, i) => (
            <div className="list-group-item" key={internship._id}>
              {JSON.stringify(internship)}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
