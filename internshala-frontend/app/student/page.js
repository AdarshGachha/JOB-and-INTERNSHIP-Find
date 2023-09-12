"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeerror } from "@/store/Reducers/studentReducer";
import { toast } from "react-toastify";




export const metadata = {
  title: "Student | Homepage",
};
const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const { errors } = useSelector((state) => state.studentReducer);

  // console.log(errors.map((e, i) => e.message));
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/student/signin');
    // }
  }, [isAuthenticated]);

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
      });
    });
    dispatch(removeerror());
  }

  return (
    <div className="container mt-5">
      <Link className="me-4 btn btn-primary" href="/student/signin">
        SignIn
      </Link>
      <Link className="btn btn-warning" href="/student/signup">
        SignUp
      </Link>

      
    </div>
  );
};

export default page;
