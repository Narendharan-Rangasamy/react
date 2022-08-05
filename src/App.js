import React from "react";
import { render } from "react-dom";
import studentData from "./studentData.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: "Student Details",
      studentDetails: studentData
    };
  }

  //ComponentDidMount - It will run after the render part runs.
  //The below hadning will be displayed after rnder heading runs with timeout as 3 secs
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        heading: "Student Details Table"
      });
    }, 3000);
  }

  //shouldComponentUpdate - Used to control DidComponeents. If it true it will execute or else it will not execute Didcomponents
  // below will run componentDidMount because shouldComponentUpdate is true
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { studentDetails, heading } = this.state;
    return (
      <React.Fragment>
        <h1>
          <u>{heading}</u>
        </h1>
        {studentDetails.map((data, index) => {
          return (
            <div key={index}>
              <h2>{data.studentID}</h2>
              <h2>{data.studentName}</h2>
              <h2>{data.studentDegree}</h2>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default App;
