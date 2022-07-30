import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      myarr: [{ studentID: 1001, studentName: "Naren", degree: "B.Sc IT", location: "Cbe", mobileNo: 12345 }]
    }
  }
  render(){
    const { myarr } = this.state
    return(
      <>
        {myarr.map((d,i) => {
          return(
            <div key={i}>
              <h3>{d.studentID}</h3>
              <h3>{d.studentName}</h3>
              <h3>{d.degree}</h3>
              <h3>{d.location}</h3>
              <h3>{d.mobileNo}</h3>
            </div>
          )
        })}
      </>
    )
  }
}

export default App