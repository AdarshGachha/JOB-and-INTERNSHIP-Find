"use client";
import styles from "./page.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";
import {
  asyncsigninstudent,
  asyncsignupstudent,
} from "@/store/Actions/studentActions";
import { removeerror } from "@/store/Reducers/studentReducer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const { errors } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninHandler = (e) => {
    e.preventDefault();
    const student = {
      email: email,
      password: password,
    };

    dispatch(asyncsigninstudent(student));
    toast.success("Successfully loggedIn", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e.message);
    });
    dispatch(removeerror());
  }

  return (
    // <div className="container mt-5">
    //   <form onSubmit={SigninHandler}>
    //     <h5>Email</h5>

    // <input
    //   type="email"
    //   name="email"
    //   value={email}
    //   onChange={(e) => setEmail(e.target.value)}
    // />
    //     <br />
    //     <br />
    //     <h5>Password</h5>

        // <input
        //   type="password"
        //   name="password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        // />
    //     <br />
    //     <br />

    //     <button className="btn btn-primary">SignIn</button>
    //   </form>
    //   <br />

    //   <Link href="/student/forget">Forget Link</Link>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <Link
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 "
                >
                  <FaFacebookF className="text-sm text-gray-700" />
                </Link>
                <Link
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 "
                >
                  <FaLinkedinIn className="text-sm text-gray-700" />
                </Link>
                <Link
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 "
                >
                  <FaGoogle className="text-sm text-gray-700" />
                </Link>
              </div>
              {/* social login section */}

              <p className="text-gray-400 my-3">or use your email account</p>
<form onSubmit={SigninHandler}>
<div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    {" "}
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1"
                    />{" "}
                    Remember me
                  </label>
                  <Link
                    href="/student/forget"
                    className={`${styles.a} text-xs text-black`}
                  >
                    Forgot Password
                  </Link>
                </div>
                <button type="submit"
                  className={`${styles.a} border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white  transition-all text-green-500`}
                 
                >
                  Sign In
                </button>
              </div>


</form>
              
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us.
            </p>
            <Link
              className={`${styles.a} border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500  transition-all text-white`}
              href="/student/signup"
              
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
