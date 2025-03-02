import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();


    const [loginForm, setLoginForm] = useState({username:'', password:''});

    const loginSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/login/', loginForm)
            const data = await response.data;
            if(data){

                localStorage.setItem('email', data.user.email)
                localStorage.setItem('id', data.user.id)
                localStorage.setItem('first_name', data.user.first_name)
                localStorage.setItem('last_name', data.user.last_name)
                localStorage.setItem('phone_number', data.user.phone_number)
                localStorage.setItem('avatar', data.user.avatar)
                localStorage.setItem('address', data.user.address)
                localStorage.setItem('bio', data.user.bio)
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)

                const timer = setTimeout(() => {
                    navigate('/'); // Redirect to home after 10 seconds
                }, 1000); // 10000 milliseconds = 10 seconds

                return () => clearTimeout(timer);

                // navigate("/")

            }
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoginForm({username:'', password:''});
        }
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Please Login</div>
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
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
                                    <label className="form-label">Email/Mobile</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={loginForm.username}
                                        onChange={(e)=>setLoginForm(prevLogin=>({...prevLogin, username: e.target.value
                                        }))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={loginForm.password}
                                        onChange={(e)=>setLoginForm(prevLogin=>({...prevLogin, password: e.target.value
                                           }))}/>
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