import React, { useState } from "react";

// option2 - using separate state 
const UserForm = (props) => {
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmpw, setConfirmpw] = useState("");

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }}
    // option 2 - using one state 
    // }
    const [newuser, setNewuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpw: ""
    })

    const changeHandler = (e) => {
        setNewuser({ ...newuser, [e.target.name]: e.target.value })
    }
    //     };

    //     return (

    return (

        <div>
            <div className="row">
                <form action="">
                    <div className="form-group">
                        <label>First name: </label>
                        <input type="text" name="firstname" onChange={changeHandler} />
                        { /* <input type="text" onChange={(e) => setFirstname(e.target.value) /> */}
                    </div>
                    <div className="form-group">
                        <label>Last name: </label>
                        <input type="text" name="lastname" onChange={changeHandler} />
                        {/* <input type="text" onChange={(e) => setLastname(e.target.value)} /> */}
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" name="email" onChange={changeHandler} />
                        {/* <input type="email" onChange={(e) => setEmail(e.target.value)} /> */}
                    </div>
                    <div className="form-group">
                        <label> Password: </label>
                        <input type="text" name="password" onChange={changeHandler} />
                        {/* <input type="text" onChange={handlePassword} /> */}
                    </div>
                    <div className="form-group">
                        <label>Confirm password: </label>
                        <input type="text" name="confirmpw" onChange={changeHandler} />
                        {/* <input type="text" onChange={(e) => setConfirmpw(e.target.value)} /> */}
                    </div>

                    <button >Submit</button>
                </form>
            </div>
            <div>
                <h3>Your form data:</h3>
                <h3>First name: {newuser.firstname}</h3>
                <h3>Last name: {newuser.lastname}</h3>
                <h3>Email: {newuser.email}</h3>
                <h3>Password: {newuser.password}</h3>
                <h3>Confirm password: {newuser.confirmpw}</h3>
            </div>
        </div>
    )
}


export default UserForm;