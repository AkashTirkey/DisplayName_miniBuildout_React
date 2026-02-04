import React, { useState } from "react";

const DisplayName = () => {
  //states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[fullName,setFullName]=useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!firstName || !lastName) return;

setFullName(`${firstName} ${lastName}`);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <label style={{display:"block"}}>
        FirstName:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
      </label>
      <label style={{display:"block"}} >Last Name:
        <input type="text"  value={lastName} onChange={(e)=> setLastName(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>

    </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
      </>
  );
};

export default DisplayName;
