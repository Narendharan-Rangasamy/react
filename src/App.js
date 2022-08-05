import React from 'react'
import studentDetails from './data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heading : "Student Details",
      studentData : studentDetails
    };
  }

  render() {
    const { studentData, heading } = this.state
    return (
      <React.Fragment>
        <h1><u>{heading}</u></h1>
        {studentData.map((data, index) => {
          return(
            <div key={index}>
              <h2>{data.studentID}</h2>
              <h2>{data.studentName}</h2>
              <h3>{data.studentDegreee}</h3>
            </div>

          )
        }
        )}
      </React.Fragment>
    )
  }
}

export default App