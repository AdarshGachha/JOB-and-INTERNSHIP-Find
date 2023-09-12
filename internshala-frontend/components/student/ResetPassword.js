import { asyncresetpasswordstudent } from '@/store/Actions/studentActions'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

const ResetPassword = () => {

    const dispatch = useDispatch();
    const [password, setPassword] = useState("")

    const ResetPasswordHandler = (e)=>{
        e.preventDefault();
        const pwd = {
            password : password,
        }
        dispatch(asyncresetpasswordstudent(pwd));

        setPassword("");
        toast.success('Successfully changed your password', {
          position: toast.POSITION.TOP_RIGHT
      });
    
    };
    

  return (


    <div className='container mt-5'>
       <form className='d-flex gap-2'>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            <button onClick={ResetPasswordHandler}  className='btn btn-danger'>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword