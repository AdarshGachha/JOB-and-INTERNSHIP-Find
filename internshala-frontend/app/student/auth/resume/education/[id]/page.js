"use client"
import { asyncediteducation } from '@/store/Actions/studentActions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'


const page = ({params}) => {
  const router = useRouter()
    const dispatch = useDispatch()
    console.log(params)

    const EditEducationHandler = () => {

        const education = {
          school:"State bank of india",
          degree: "BCA",

        }
        dispatch(asyncediteducation(params.id, education))
        router.push("/student/auth/resume")

    };
  return (
    <div className='container mt-5'>    
        <button onClick={EditEducationHandler} className='btn btn-warning'> Edit Education</button>
    </div>
  )
}

export default page