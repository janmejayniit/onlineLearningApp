import React, {useEffect, useState} from "react";
import axios from "axios";

const AddSection = ()=>{

    const [courses, setCourses] = useState([]);
    const [courseContent, setCourseContent] = useState({course:'',section_title:''});

    const getCourses = async () => {
        const url="http://localhost:8000/course/list/";
        try{
            const response = await fetch(url)
            const data = await response.json();
            setCourses(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    const submitCoureSection = async (e) => {
        e.preventDefault();
        try {
            const url="http://localhost:8000/course/section/add/";
            const response = axios.post(url,courseContent);
            const data = await response.data;
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
        finally {
            setCourseContent({course:'',section_title:''});
        }
    }


    useEffect(()=>{
        getCourses();
    },[])

    return(
    <div className="container mt-3">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-header">Add Course Details</div>
                    <div className="card-body">
                        <form onSubmit={submitCoureSection}>
                             
                            <div className="mb-3">
                                <label className="form-label">Select Course</label>
                                <select
                                    className="form-control form-control-sm"
                                    value={courseContent.course}
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,course: e.target.value}))}
                                >
                                    <option>--Choose Course</option>
                                    {courses && courses.map((course)=>{
                                         return(
                                             <>
                                                 <option value={course.id}>{course.title}</option>
                                             </>
                                         )
                                    })}
                                </select>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Section Names</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={courseContent.section_title}
                                    onChange={(e)=>setCourseContent(prevData=>({...prevData,section_title:e.target.value}))}
                                />
                            </div>                 
                            <button type="submit" className="btn btn-dark btn-sm">Add</button>    
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
    )
}

export default AddSection;