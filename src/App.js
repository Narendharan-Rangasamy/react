import React from 'react'
import studentData from './studentData.json'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      heading  : "STUDENT DATA",
      studentDetails : [],
      dataEmpty :false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        dataEmpty :  false
      })
    }, 0);

    setTimeout(() => {
      this.setState({
        heading : "STUDENT DATA INFO",
        studentDetails : studentData,
        dataEmpty :true
      })
    }, 4000);
  }

  shouldComponentUpdate(){
    return true;
  }


  render(){
    const {studentDetails, heading, dataEmpty} = this.state
    return(
      <>
      <h1><u>{heading}</u></h1>
      {/* fallback method - It will check the lenght of aray declared above and return below template
        ifthe value is 0. In simple words it will display below text
        during the settime out period
        
        In below case it will display loading until 4 secs as setimeout declared for 4 secs*/}
      {!studentDetails.length && !dataEmpty && <h2>loading...</h2>}
      {/* The below condition is used to display no result if data not found
          We have decalred dataEmpty boolean value in class and set it as false using componentDidMount.
          If the array is found to be empty at componentDidMount then we are setting dataEmpty as true(line No-25)
          and it will run below condition */}
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
}

export default App
