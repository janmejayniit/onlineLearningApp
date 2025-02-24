import React from "react";

const Register = () =>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Please Register</div>
                        <div className="card-body">
                            <form>
                                
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control form-control-sm"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control form-control-sm"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profession</label>
                                    <select className="form-control form-control-sm">
                                        <option value="">Choose</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Teacher</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col">
                                         <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control form-control-sm"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Mobile</label>
                                            <input type="text" className="form-control form-control-sm"/>
                                        </div>
                                    </div>
                                </div>
                               
                                
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-sm"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control form-control-sm"/>
                                </div>
                                <button type="submit" className="btn btn-dark btn-sm">Register</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Register;