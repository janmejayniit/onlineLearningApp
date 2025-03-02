import React from "react";
import axios from "axios";

const Register = () =>{

    const [registerForm, setRegisterForm] = React.useState({first_name:'', last_name:'', profession:'', email:'', mobile:'', password:'', confirm_password:''});

    const [errors, setErrors] = React.useState([]);

    const doRegister = async (e) =>{
        e.preventDefault();
        if(validatFormData()){
            try{

                const url="http://localhost:8000/auth/register/";
                const response = await axios.post(url,registerForm);
                const data = await response.data;
                console.log(data);
            }
            catch (error) {
                console.log(error);
                setErrors([...errors,error]);
            }
            finally{
                setErrors([]);
                setRegisterForm({first_name:'', last_name:'', profession:'', email:'', mobile:'', password:'', confirm_password:''})
            }
        }


    }

    const validatFormData =()=>{

        if(registerForm.first_name=='' || registerForm.last_name=='' || registerForm.profession=='' || registerForm.mobile=='' || registerForm.password=='' || registerForm.confirm_password==''){
            setErrors([...errors,'Please fill all the fields.']);
            return false;
        }
        else if(registerForm.password.length<6){
            setErrors([...errors,'Password must be at least 6 characters.']);
            return false;
        }
        else if(registerForm.password!=registerForm.confirm_password){
            setErrors([...errors,'Confirm should match with password']);
            return false;
        }
        return true;

    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Please Register</div>
                        <div className="card-body">
                            {errors && errors.map((error)=>{
                                return(
                                    <>
                                        <p className="text-danger">{error}</p>
                                    </>
                                )
                            })}
                            <form onSubmit={doRegister}>
                                
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={registerForm.first_name}
                                                onChange = {(e)=>setRegisterForm(prevData=>({...prevData, first_name: e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={registerForm.last_name}
                                                onChange = {(e)=>setRegisterForm(prevData=>({...prevData, last_name: e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profession</label>
                                    <select
                                        className="form-control form-control-sm"
                                        value={registerForm.profession}
                                        onChange={(e)=>setRegisterForm(prevData=>({...prevData, profession: e.target.value}))}
                                    >
                                        <option value="">Choose</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Teacher</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="col">
                                         <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-sm"
                                                value={registerForm.email}
                                                onChange={(e)=>setRegisterForm(prevData=>({...prevData, email:e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label">Mobile</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={registerForm.mobile}
                                                onChange={(e)=>setRegisterForm(prevData=>({...prevData, mobile: e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                </div>
                               
                                
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={registerForm.password}
                                        onChange={(e)=>setRegisterForm(prevData=>({...prevData, password:e.target.value}))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={registerForm.confirm_password}
                                        onChange={(e)=>setRegisterForm(prevData=>({...prevData, confirm_password:e.target.value}))}
                                    />
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