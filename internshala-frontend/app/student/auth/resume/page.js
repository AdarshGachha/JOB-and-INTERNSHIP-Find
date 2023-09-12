"use client";
import { asyncdeleteeducation } from "@/store/Actions/studentActions";
import styles from "./style.module.css";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteeducation(id));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">This os Your Resume Section</h3>
      <h4>
        Education{" "}
        <Link className={styles.link} href="/student/auth/resume/education">
          ➕
        </Link>
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.education.map((edu) => (
            <div key={edu.id} className="list-group-item">
              {JSON.stringify(edu)}
              <br />
              <br />
              <Link
                className={`${styles.link} btn btn-primary btn-sm text-white `}
                href={`/student/auth/resume/education/${edu.id}`}
              >
                Edit
              </Link>

              <button
                onClick={()=>DeleteHandler(edu.id)}
                className="btn btn-danger ms-2 btn-sm"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
      <br />
      <hr />
      <br /> 

      <h4>

        JOBS{" "}
        <Link className={styles.link} href="/student/auth/resume/job">
          ➕
        </Link>
      </h4>
    </div>
  );
};

export default page;
