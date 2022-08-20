import React, { useState } from "react";

const initialState = {
  employeeName: "",
  employeeDegree: "",
  employeeAge: 0,
  employeeMail: "",
  errors: {
    common: "Please fill all the fields !",
    employeeName: {
      allFields: "Employee Name is required",
      count: "Employee name should not less than 5 characters"
    },
    employeeDegree: {
      allFields: "Employee degree is required",
      count: "Employee degree should not less than 3 characters"
    },
    employeeAge: {
      allFields: "Employee age is required"
    },
    employeeMail: {
      allFields: "Employee email is required"
    }
  }
};

const App = () => {
    const [employeeDetail, setemployeeDetail] = useState(initialState);
    const [employeeData, setemployeeData] = useState([]);
    const [errors, seterrord] = useState("");

    const handleChange = (event) => {
      const{ employeeName, value } = event.target;
      setemployeeDetail({
        ...employeeDetail,
        [employeeName]: value
      })
    }


    const handleAllDelete = () => {
      setemployeeData([]);
    }
  return(
    <React.Fragment>
      <form>
        <div>
          <h2><b><u>Employee Details Form</u></b></h2>
        </div>

        <div>
          Name : <input
            type="text"
            name='employeename'
            placeholder='Enter your name'
            value={employeeDetail.employeeName}
            onChange={handleChange}

          />
        </div><br></br>

        <div>
          Degree : <input
            type="text"
            name='employeedegree'
            placeholder='Enter your degree'
            value={employeeDetail.employeeDegree}
            onChange={handleChange}
          />
        </div><br></br>

        <div>
          Age : <input
            type="number"
            name='employeeage'
            placeholder='Enter your age'
            value={employeeDetail.employeeAge}
            onChange={handleChange}
          />
        </div><br></br>

        <div>
          Email : <input
            type="text"
            name='employeemail'
            placeholder='Enter your email'
            value={employeeDetail.employeeMail}
            onChange={handleChange}
          />
        </div><br></br>

        <div>
          <input
            type="submit"
            placeholder='Submit'
          />
          <button
            type="button"
            onClick={handleAllDelete}>
            Delete
          </button>
          <h2><b>Added Employee's List</b></h2>
          {employeeData && employeeData.map((d) => {
            return(
              <div key={d.id}>
                <h2>{d.employeeName}</h2>
                <h2>{d.employeeDegree}</h2>
                <h2>{d.employeeAge}</h2>
                <h2>{d.employeeMail}</h2>
              </div>
            )
          })}
        </div>
      </form>
    </React.Fragment>
  )
}


export default App