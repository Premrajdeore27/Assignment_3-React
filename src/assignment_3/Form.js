import React, { useState } from "react";


const Emform = () => {
  const [userRegistration, setUserRegistration] = useState({
        name: "",
        department: "",
        rating: ""
  });

  const [employee, setEmployee] = useState([]);
  const [btnc, setbtnc] = useState(false);

  const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
         ...userRegistration,
        id: new Date().getTime().toString()
    };
    setEmployee([...employee, newEmployee]);

    setUserRegistration({ name: "", department: "", rating: "" });
    setbtnc(true);
  };

  const gobckbtn = () => {
    setbtnc(false);
  };

  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      {btnc ? null : (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" autoComplete="off" value={userRegistration.name} onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="department">Department:</label>
            <input type="text" name="department" id="department" autoComplete="off" value={userRegistration.department} onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" name="rating" id="rating" autoComplete="off" value={userRegistration.rating} onChange={handleInput} />
          </div>

          <input className="btn" type="submit" value="Submit" />
        </form>
      )}
<hr></hr>
      {btnc ? (
        <div className="inform">
          {employee.map((currentElement) => {
            const { id, name, department, rating } = currentElement;
            return (
              <div className="data" key={id}>
                <p className="inside">
                  Name: {name} | Department: {department} | Rating: {rating}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
      <br />
      {btnc ? (
        <input
          className="btn"
          onClick={gobckbtn}
          type="button"
          value="Go Back"
        />
      ) : null}
    </div>
  );
};

export default Emform;
