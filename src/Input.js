import "./InputStyles.css";
import React, { useState } from 'react'

const Input = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const [error,setError]=useState(false); 
    const handelSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length==0||lastName.length==0){
            setError(true)
        }
        console.log(firstName,lastName)
    }

  return (
    <>
        <form onSubmit={handelSubmit}>
            <div>
                <input onChange={e=>setFirstName(e.target.value)} placeholder="Enter 4 Digit OTP" />
            </div>
            {error ? 
            <label>Please Enter Valid OTP, OTP Wrong</label> : ""}
            
            {/* <div>
                <input onChange={e=>setLastName(e.target.value)} />
            </div>
            {error?
            <label>Do not forget to fill this field</label> : ""} */}


            <div className="kk">
                <button className="rr">Veirfy</button>
            </div>
        </form>
    </>
  )
}

export default Input