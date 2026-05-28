import React, { useState } from 'react'

function StudentRegistration() {

    const [data, setData] = useState({
        name: "",
        tel: "",
        email: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name === "" || data.tel === "" || data.email === "") {
            alert("Fill All Data!");
        }
        else {
            alert(`Data Submitted Successfully by ${data.name}!`);
        }

        setData({
            name: "",
            tel: "",
            email: ""
        });
    };

    return (
        <div>

            <h1>Student Registration</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label htmlFor="tel">Mobile: </label>

                <input
                    type="tel"
                    id="tel"
                    name="tel"
                    value={data.tel}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <label htmlFor="email">Email: </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Registration Here!
                </button>

            </form>

        </div>
    )
}

export default StudentRegistration