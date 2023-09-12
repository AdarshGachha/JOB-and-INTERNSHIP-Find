"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);

  return (
    <div className="container mt-5 ">
      <ul className=" list-group ">
        <h1>
          Applied jobs and Internships by{" "}
          <strong>{student && student.firstname}</strong>
        </h1>
        {student &&
          student.jobs.map((job, i) => (
            <div className="list-group-item text-wrap p-5" key={job._id}>
              {JSON.stringify(job)}
            </div>
          ))}

        {student &&
          student.internships.map((internship, i) => (
            <div className="list-group-item p-5" key={internship._id}>
              {JSON.stringify(internship)}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
