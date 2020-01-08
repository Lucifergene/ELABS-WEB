import React, { Component } from 'react';

class JoinUs extends Component{
    state = {
        fullName: '',
        email: '',
        mobile:'',        
        branch: '',
        year:''
    }

    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
       
   }
    handleChange = (e) => {
       this.setState({
           [e.target.id]:e.target.value
       }) 
    }
    render() {
    return (
            <center>
                <div className="col-md-6">
                        <div className="card"></div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="card-body">                         
                        <div className="form-row">
                            <div className="form-group col-md-12"> 
                                <div className = "input-field"> 
                                    <input type ="text" className="form-control" id = "fullName" name = "fullName" onChange={this.handleChange} required="required" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12"> 
                                <div className = "input-field"> 
                                    <input type ="number" className="form-control" id = "year" name = "year" onChange={this.handleChange} required="required" placeholder="Year"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12"> 
                                <div className = "input-field"> 
                                    <input type ="text" className="form-control" id = "branch" name = "branch" onChange={this.handleChange} required="required" placeholder="Branch"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12">  
                                <div className = "input-field">                 
                                    <input type="email" className="form-control" id="email" placeholder="Email" required="required" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                                <div className="form-group col-md-12">
                                        <div className = "input-field">
                                            <input id="mobile" placeholder="Mobile No." className="form-control" type="tel" onChange= {this.handleChange}/>
                                        </div>
                                        </div>                              
                                   </div>
                                                            
                                        <div className="form-row">
                                        <div className = "input-field">                        
                                            <button type="button" className="btn btn-success">Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </form>      

            </div>
            </center>
      )
    }
}

  export default JoinUs;