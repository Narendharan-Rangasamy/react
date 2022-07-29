import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            // myarr: ["Sam","Chris","Joe"]
            myarr: [{ studentID: 1001, studentName: "Naren", degree: "B.Sc IT", location: "Cbe", mobileNo: 12345 }]
        };
    }

    render() {
        return (
            <React.Fragment>
                <p>My ID is -</p>  {
                    this.state.myarr.map(myarr =>
                    (<b key={myarr.studentID}>
                        {myarr.studentID}
                    </b>)
                    )}

                <p>My Name is -</p>  {
                    this.state.myarr.map(myarr =>
                    (<b key={myarr.studentName}>
                        {myarr.studentName}
                    </b>)
                    )}

                <p>My Degree is -</p>  {
                    this.state.myarr.map(myarr =>
                    (<b key={myarr.degree}>
                        {myarr.degree}
                    </b>)
                    )}

                <p>My Location is -</p>  {
                    this.state.myarr.map(myarr =>
                    (<b key={myarr.location}>
                        {myarr.location}
                    </b>)
                    )}
            </React.Fragment>
        );
    }
}

export default App;