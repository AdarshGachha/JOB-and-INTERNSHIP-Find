"use client"
import { asyncaddeducation } from '@/store/Actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();


    const AddEducationHandler = () => {

        const education ={

            status: "completed",
            year: "2016",
            board: "CBSE",
            degree: "string",
            performance: "PCM",
            school:"VJVM hss",
            degree: "Btech",
            // from: "2021-09-09T06:57:03.000Z",
            // to: "2021-09-09T06:57:03.000Z",
            // description: "string",
            // current: true,
            // id: "string"


        }

        dispatch(asyncaddeducation(education))
        
    }

  return (
    <div className={`container mt-5`}>
        <button onClick={AddEducationHandler} className='btn btn-primary'>ADD</button>
    </div>
  )
}

export default page