"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import { removeerror } from "@/store/Reducers/employeReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const [profile, setProfile] = useState("");
  const [skill, setSkill] = useState("");
  const [internshiptype, setInternshiptype] = useState(null);
  const [openings, setOpenings] = useState(Number);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [stipendstatus, setStipendstatus] = useState("");
  const [stipendamount, setStipendamount] = useState(Number);
  const [perks, setPerks] = useState("");
  const [assessments, setAssessments] = useState("");


  const InternshipTypehandler = (event) => {
    // console.log(event.target.value);
    setInternshiptype(event.target.value);
  };
  console.log(internshiptype);

  const StipendStatusHandler = (event) => {
    // console.log(event.target.value);
    setStipendstatus(event.target.value);
  };
  console.log(stipendstatus);

  const CreateInternshipHandler = (e) => {
    e.preventDefault();
    const internship = {
      profile: profile,
      skill: skill,
      internshiptype: internshiptype,
      openings: openings,
      duration: duration,
      responsibility: responsibility,
      stipend: {
        status: stipendstatus,
        amount: stipendamount,

    },
      perks: perks,
      assessments: assessments,
    };
    dispatch(asynccreateinternshipemploye(internship));

    console.log(internship)

    setProfile("")
setSkill("")
setInternshiptype("")
setOpenings("")
setFrom("")
setTo("")
setDuration("")
setResponsibility("")
setStipendstatus("")
setStipendamount("")
setPerks("")
setAssessments("")
  };

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e.errName + " - Fill all Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
    dispatch(removeerror());
  }

  return (
    <div className="container mt-5">
      <form onSubmit={CreateInternshipHandler}>
        <h5>profile</h5>
        <input
          type="text"
          name="profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
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
        <h5>internship Type</h5>
        {/* // ! internship TYPE */}
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="internshiptype"
            value="In office"
            onChange={InternshipTypehandler}
          />
          <label>In office</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="internshiptype"
            value="Remote"
            onChange={InternshipTypehandler}
          />
          <label>Remote</label>
        </div>

        {/* // ! internship TYPE  */}

        <br />

        <h5>Openings</h5>

        <input
          type="text"
          name="openings"
          value={openings}
          onChange={(e) => setOpenings(e.target.value)}
        />
        <br />
        <h5>From</h5>
        <input
          type="date"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <br />
        <h5>To</h5>
        <input
          type="date"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <br />
        <h5>Duration</h5>

        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <br />
        <h5>responsibility</h5>
        <input
          type="text"
          name="responsibility"
          value={responsibility}
          onChange={(e) => setResponsibility(e.target.value)}
        />
        <br />
        <h5>Stipend</h5>
<div className="container">
    
        {/* //!stipend status TYPE */}

        <h5>Status</h5>

        <div className="d-flex gap-2">
          <input
            type="radio"
            name="status"
            value="Fixed"
            onChange={StipendStatusHandler}
          />
          <label>Fixed</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="status"
            value="Negotiable"
            onChange={StipendStatusHandler}
          />
          <label>Negotiable</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="status"
            value="Performance Based"
            onChange={StipendStatusHandler}
          />
          <label>Performance Based</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            name="status"
            value="Unpaid"
            onChange={StipendStatusHandler}
          />
          <label>Unpaid</label>
        </div>

        {/* // ! stipend status TYPE  */}
        <br />
        <h5>Amount</h5>
        <input
          type="text"
          name="stipendamount"
          value={stipendamount}
          onChange={(e) => setStipendamount(e.target.value)}
        />
</div>
        <br />
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

        <button className="btn btn-primary">Create Internship</button>
      </form>
    </div>
  );
};

export default page;
