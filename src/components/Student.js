import React from "react";

class Student extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image : 'https://media-exp1.licdn.com/dms/image/C4E03AQG4B5mA12Hn8w/profile-displayphoto-shrink_800_800/0/1635029883915?e=1646870400&v=beta&t=QV8MqMWZqfzfrjLS-pvXZ33PwBWYttKbJSP-De9fvXs',
            name : 'SAGAR SAURABH',
            age : '24',
            course : 'BTECH',
            college : 'GCE GAYA',
            address : 'INDIA',
            
        }
    }

    render() {
        return (
            <React.Fragment>
               <div className="container mt-3">
                   <div className="row">
                       <div className="col">
                           <div className="card">
                               <div className="card-header bg-primary text-white">
                                   <p className="h4">Student Details</p>
                               </div>
                               <div className="card-body bg-light">
                                   <div className="row">
                                       <div className="col-md-4 text-center">
                                           <img src={this.state.image} alt="" className="img-fluid img-thumbnail"/>
                                       </div>
                                       <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                NAME : <span className="font-weight-bold">{this.state.name}</span>
                                            </li>
                                            <li className="list-group-item">
                                                AGE : {this.state.age} yrs.
                                            </li>
                                            <li className="list-group-item">
                                                COLLEGE : {this.state.college}
                                            </li>
                                            <li className="list-group-item">
                                                ADDRESS : {this.state.address}
                                            </li>
                                            
                                        </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        );

    }

}
export default Student;
