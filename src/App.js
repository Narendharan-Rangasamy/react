import React, { useState } from 'react'
import { useEffect } from 'react'
import studentData from './studentData.json'

function App(){
  const [source, setSource] = useState({
    heading : "STUDENT DETAILS",
    studentDetails : [],
    dataEmpty : false
})
  

 // Below useEffect is used instead of componentDidMount while writting in function
  //We have declared one common object called source and used it
  useEffect(() => {
    setTimeout(() => {
      setSource({
        dataEmpty: false
      });
      setSource({
        heading: "STUDENT DATA INFO",
        studentDetails: studentData,
        dataEmpty: true
      });
    }, 4000);
  });

  const{studentDetails, heading, dataEmpty} = source
  return(
    <>
    <h1><u>{heading}</u></h1>
    {!studentDetails.length && !dataEmpty && <h2>loading..</h2>}
    {dataEmpty && !studentDetails.length && <h2>Ops!! No data found</h2>}
      {studentDetails.map((data, index) => {
        return(
          <div key={index}>
              <h2>{data.studentID}</h2>
              <h2>{data.studentName}</h2>
              <h2>{data.studentDegree}</h2>
          </div>
        )
      })}
    </>
  )
}

export default App