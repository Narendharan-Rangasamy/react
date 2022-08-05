import React, {useState} from 'react'
import studentDetails from './studentData.json'

function App() {
  const [studentInfo] = useState(studentDetails);
  const [heading] = useState("Student Details");


  return (
    <>
      <h1><u>{heading}</u></h1>
      {studentInfo.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.studentID}</h2>
            <h3>{data.studentName}</h3>
            <h4>{data.studentDegree}</h4>
          </div>
        )
      })}
    </>
  )
}
export default App