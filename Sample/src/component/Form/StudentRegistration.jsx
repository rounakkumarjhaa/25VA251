import React, { useState } from 'react'

function StudentRegistration() {
    const[data,setData] = useState({ name: "Ranjan", tel: "8250255505", email: "abc@gmail.com" });
    const handleChange = (e)=>{
        setData({...data , 
            [e.target.name]: e.target.value
        });
    };
    const handelSubmit = (e) =>{
        e.preventDefault();
        if(data.name=="" || data.tel=="" || data.email==""){
            alert("Fill ALl Data!")
        }
        else{
            alert(`Data Submited Successfully by ${data.name} !`)
        }
        setData({name: "" , tel:"" , email: ""});
    };
  return (
    <div>
        <h1>Student Registration</h1>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="name">Mobile: </label>
            <input type="tel" id="name" name = "tel" required value={data.tel} />

            <label htmlFor="name">Email: </label>
            <input type="email" id="name" name = "email" required value={data.email} />
            <button type='submit'>Registration Here!</button>
        </form>
    </div>
  )
}

export default StudentRegistration
