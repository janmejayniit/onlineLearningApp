import React from "react";

const Login = () =>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Please Login</div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <a href="#" className="btn btn-dark btn-sm d-md-block">Login with Gmail</a>
                                    </div>
                                    <div className="col">
                                    <a href="#" className="btn btn-dark btn-sm d-md-block">Login with Github </a>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                <span style={{border: '1px solid #b3acac'}}></span>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-sm"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-sm"/>
                                </div>
                                <button type="submit" className="btn btn-dark btn-sm">Login</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Login;