"use client";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/student/signin');
    // }
  }, [isAuthenticated]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Genderhandler = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
    console.log(gender);
  };
  const SignupHandler = (e) => {
    e.preventDefault();
    const newStudent = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      city: city,
      gender: gender,
      email: email,
      password: password,
    };

    dispatch(asyncsignupstudent(newStudent));
  };

  return (
    <div className="container mt-5">
      <form onSubmit={SignupHandler}>
        <h5>Firstname</h5>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <h5>Lastname</h5>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <h5>Contact</h5>

        <input
          type="text"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br />
        <h5>City</h5>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <h5>Gender</h5>

        {/* // ! GENDER */}
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={Genderhandler}
          />
          <label>Male</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={Genderhandler}
          />
          <label>Female</label>
        </div>

        {/* // ! GENDER */}
        <br />

        <h5>Email</h5>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <h5>Password</h5>

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button className="btn btn-success">SignUp</button>
      </form>
    </div>
  );
};

export default page;
