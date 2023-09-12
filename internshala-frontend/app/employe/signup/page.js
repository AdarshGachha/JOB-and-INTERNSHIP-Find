"use client";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/employe/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/employe/signin');
    // }
  }, [isAuthenticated]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationname, setOrganizationname] = useState("");

  const Genderhandler = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
    console.log(gender);
  };
  const SignupHandler = (e) => {
    e.preventDefault();
    const newemploye = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email: email,
      password: password,
      organizationname: organizationname,
    };

    dispatch(asyncsignupemploye(newemploye));
  };

  return (
    // <div className="container mt-5">
    //   <form onSubmit={SignupHandler}>
    //     <h5>Firstname</h5>
    //     <input
    //       type="text"
    //       name="firstname"
    //       value={firstname}
    //       onChange={(e) => setFirstname(e.target.value)}
    //     />
    //     <br />
    //     <h5>Lastname</h5>
    //     <input
          // type="text"
          // name="lastname"
          // value={lastname}
          // onChange={(e) => setLastname(e.target.value)}
    //     />
    //     <br />
    //     <h5>Contact</h5>

    //     <input
    //       type="text"
    //       name="contact"
    //       value={contact}
    //       onChange={(e) => setContact(e.target.value)}
    //     />

    //     <br />

    //     <h5>Email</h5>

    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <br />
    //     <br />
    //     <h5>Password</h5>

    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <h5>Organization Name</h5>
    //     <input
    //       type="text"
    //       name="organizationname"
    //       value={organizationname}
    //       onChange={(e) => setOrganizationname(e.target.value)}
    //     />
    //     <br />
    //     <br />

    //     <button className="btn btn-success">SignUp</button>
    //   </form>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://ik.imagekit.io/adarsh/logo.png?updatedAt=1694461597501"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={SignupHandler}>
          <div>
            <label
              
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                autoComplete="firstname"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="lastname"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contact
            </label>
            <div className="mt-2">
              <input
               type="text"
               name="contact"
               value={contact}
               onChange={(e) => setContact(e.target.value)}
                autoComplete="contact"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Organiztion Name
              </label>
            </div>
            <div className="mt-2">
              <input
                 type="text"
                       name="organizationname"
                       value={organizationname}
                       onChange={(e) => setOrganizationname(e.target.value)}
                autoComplete="organizationname"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500  outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
