"use client";
import { asyncavatarstudent, asyncupdatestudent } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import  ResetPassword  from "@/components/student/ResetPassword";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { student } = useSelector((state) => state.studentReducer);

  console.log(student);

  const [firstname, setFirstname] = useState(student ? student.firstname : undefined);
  const [lastname, setLastname] = useState(student ? student.lastname : undefined);
  const [contact, setContact] = useState(student ? student.contact : undefined);
  const [city, setCity] = useState(student ? student.city : undefined);
  const [gender, setGender] = useState(student ? student.gender : "");
  const [email, setEmail] = useState(student ? student.email : undefined);

  console.log(gender);

  const StudentUpdateHandler = (e) => {
    e.preventDefault();
    const updateStudent = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      city: city,
      gender: gender,
      email: email,
    };

    dispatch(asyncupdatestudent(updateStudent));
    router.push("/student/auth");
    toast.success('Successfully Updated ', {
      position: toast.POSITION.TOP_RIGHT
  });
  };

  const AvatarHandler = (e)=>{
    e.preventDefault();
    console.log()
    const formdata = new FormData(e.target);
    formdata.set("avatar",e.target.avatar.files[0])
    dispatch(asyncavatarstudent(formdata));

  }





  // rendering


  return (
    <div className="container">
      <img height={100} src={student && student.avatar.url} alt="" />
          <form onSubmit={AvatarHandler} encType="multipart/form-data">
            <input type="file" name="avatar"/>
            <button>Submit</button>
          </form>
      {student && 
        <div key={student._id}>
          

<div className="container forms d-flex gap-5">
<form on onSubmit={StudentUpdateHandler}>
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

        <div className="d-flex gap-2">
          <input
            type="radio"
            name="gender"
            value={gender &&  "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Male</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="gender"
            value={gender && "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Female</label>
        </div>

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
        <button className="btn btn-warning mt-3">Update Student</button>
      </form>

      <ResetPassword />
     
</div>

          
        </div>
      }

      
    </div>
  );
};

export default profile;
