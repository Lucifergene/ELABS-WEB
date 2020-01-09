import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

const course = [
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Android Development', label: 'Android Development' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'AR/VR', label: 'AR/VR' },
    { value: 'Java', label: 'Java' },
    { value: 'Networking', label: 'Networking' },
    { value: 'IOT', label: 'IOT' },
    { value: 'Embedded Systems', label: 'Embedded Systems' },

  ];

  const year = [
    { value: '1st Year  ', label: '1st Year' },
    { value: '2nd Year', label: '2nd Year' },
  ]

  export default class JoinUs extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRoll = this.onChangeRoll.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);        
        this.onChangeCvlink = this.onChangeCvlink.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // todo_description: '',
            // todo_responsible: '',
            // todo_priority: '',
            // todo_completed: false

            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:'',
            course:null,
            contact:'',
            cvlink:'',
            reason_of_join:''
        }
    }

    onChangeCourse(e) {
        this.setState({
             course: e
            });
        // console.log(`Option selected:`, e);
      };

    // onChangeTodoDescription(e) {
    //     this.setState({
    //         todo_description: e.target.value
    //     });
    // }

    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeRoll(e) {
        this.setState({
            roll: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeBranch(e) {
        this.setState({
            branch: e.target.value
        });
    }
    onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
    }
    // onChangeCourse(e) {
    //     this.setState({
    //         course: e.target.value
    //     });
    // }
    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        });
    }
    onChangeCvlink(e) {
        this.setState({
            cvlink: e.target.value
        });
    }
    onChangeReason(e) {
        this.setState({
            reason_of_join: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        // console.log(`Todo Description: ${this.state.todo_description}`);
        // console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        // console.log(`Todo Priority: ${this.state.todo_priority}`);

        console.log(`Name: ${this.state.name}`);
        console.log(`Roll Number: ${this.state.roll}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Branch: ${this.state.branch}`);
        console.log(`Year: ${this.state.year}`);
        console.log(`Course: ${this.state.course}`);
        console.log(`Contact: ${this.state.contact}`);
        console.log(`CV Link: ${this.state.cvlink}`);
        console.log(`Reason: ${this.state.reason_of_join}`);
     
        const newTodo = {
            // todo_description: this.state.todo_description,
            // todo_responsible: this.state.todo_responsible,
            // todo_priority: this.state.todo_priority,
            // todo_completed: this.state.todo_completed

            name: this.state.name,
            roll: this.state.roll,
            branch: this.state.branch,
            year: this.state.year,
            course: this.state.course,
            contact: this.state.contact,
            email: this.state.email,
            cvlink: this.state.cvlink,
            reason_of_join: this.state.reason_of_join,

        };

        axios.post('#', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:'',
            course:null,
            contact:'',
            cvlink:'',
            reason_of_join:''
        })
    }

    render() {
        // const { course } = this.state;
        return (
            <center>
                 <div className="col-md-6">
            <div style={{marginTop: 50}}>
                <h3>Recruitment Form</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        {/* <label>Full Name: </label> */}
                        <input  type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        {/* <label>Roll Number: </label> */}
                        <input 
                                type="number" 
                                placeholder="College Roll Number"
                                className="form-control"
                                value={this.state.roll}
                                onChange={this.onChangeRoll}
                                />
                    </div>
                    <div className="form-group">
                        {/* <label>Email: </label> */}
                        <input 
                                type="email" 
                                placeholder="E-Mail Address"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        {/* <label>Branch: </label> */}
                        <input 
                                type="text" 
                                placeholder="Branch"
                                className="form-control"
                                value={this.state.branch}
                                onChange={this.onChangeBranch}
                                />
                    </div>
                    <div className="form-group">
                        {/* <label>Year: </label> */}
                        
                            <Select 
                                value={this.state.year}
                                onChange={this.onChangeYear}
                                options={year}
                                    placeholder="Year of College" />
                    </div>
                    <div className="form-group">
                        {/* <label>Course: </label> */}
                        {/* <input 
                                type="text" 
                                className="form-control"
                                value={this.state.course}
                                onChange={this.onChangeCourse}
                                /> */}
                                <Select 
                                value={this.state.course}
                                onChange={this.onChangeCourse}
                                options={course}
                                    placeholder="The Course You Are Interested"/>
                    </div>
                    <div className="form-group">
                        {/* <label>Contact: </label> */}
                        <input 
                                type="number" 
                                className="form-control"
                                placeholder="Mobile No."
                                value={this.state.contact}
                                onChange={this.onChangeContact}
                                />
                    </div>

                    <div className="form-group">
                        {/* <label>CV Link: </label> */}
                        <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter Your CV Link (Google Drive)"
                                value={this.state.cvlink}
                                onChange={this.onChangeCvlink}
                                />
                    </div>
                    <div className="form-group">
                        {/* <label>Reason Of Join: </label> */}
                            <textarea cols="40" rows="5" placeholder="Why Do You Want To Join?"className="form-control" value={this.state.reason_of_join} onChange={this.onChangeReason}></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
            </center>
        )
    }
}