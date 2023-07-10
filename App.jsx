import React, { useState } from "react";

const App = () => {
  const [values, updateValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    updateValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const onsubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted!!");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onsubmits}>
          <div>
            <h1>
              Hello {values.fname} {values.lname}
            </h1>
            <p>{values.email}</p>
            <p>{values.phone}</p>
            <input
              type="text"
              placeholder="Enter Your First Name?"
              name="fname"
              onChange={inputEvent}
              value={values.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name?"
              name="lname"
              onChange={inputEvent}
              value={values.lname}
            />
            <input
              type="email"
              placeholder="Enter Your email?"
              name="email"
              onChange={inputEvent}
              value={values.email}
            />
            <input
              type="number"
              placeholder="Enter Your number?"
              name="phone"
              onChange={inputEvent}
              value={values.phone}
            />
            <button type="submit">Click me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
