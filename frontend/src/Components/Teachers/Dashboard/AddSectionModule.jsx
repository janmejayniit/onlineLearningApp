import React, {useEffect, useState} from "react";
import axios from "axios";

const AddSectionModule = ()=>{
    const [courses, setCourses] = useState([]);
    const [sections, setSections] = useState([]);

    const [courseContent, setCourseContent] = useState({course:'',section:'',module_title:'',duration:'', file_type:'',media_file:''});

    const submitSection = async (e)=>{
        e.preventDefault();
        try{
            const formData = new FormData();

            const dur_time = courseContent.duration.split(':');
            const total_seconds = parseInt((dur_time[0]*60))+parseInt(dur_time[1]);

            formData.append('course',courseContent.course);
            formData.append('section',courseContent.section);
            formData.append('module_title',courseContent.module_title);
            formData.append('duration',total_seconds);
            formData.append('file_type',courseContent.file_type);
            courseContent.media_file ? formData.append('media_file',courseContent.media_file):null;
            const url="http://localhost:8000/course/module/add/";
            const response = await axios.post(url,formData,{
                'headers':{'Content-Type': 'multipart/form-data',}
            });
            const data = await response.data;
            console.log(data);

        }catch(error){
            console.log(error);
        }finally {
            setCourseContent({module_title:'',duration:'', file_type:'',media_file:''})
        }
    }
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

    const getSections = async (cid) => {
        const url=`http://localhost:8000/course/section/list/${cid}`;
        try{
            const response = await fetch(url)
            const data = await response.json();
            setSections(data)
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        getCourses();
    },[])

    useEffect(() => {
        if (courseContent.course) {
            getSections(courseContent.course);
        }
    }, [courseContent.course]);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-header">Add Course Details</div>
                        <div className="card-body">
                            <form onSubmit={submitSection}>
                                <div className="mb-3">
                                    <label className="form-label">Select Course</label>
                                    <select
                                        className="form-control form-control-sm"
                                        value={courseContent.course}
                                        onChange={(e) => setCourseContent(prevData => ({
                                            ...prevData,
                                            course: e.target.value
                                        }))}
                                    >
                                        <option>--Choose Course</option>
                                        {courses && courses.map((course) => {
                                            return (
                                                <>
                                                    <option value={course.id}>{course.title}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select Section</label>
                                    <select
                                        className="form-control form-control-sm"
                                        onChange={(e) => setCourseContent(prevData => ({
                                            ...prevData,
                                            section: e.target.value
                                        }))}
                                    >
                                        <option>--Choose Course</option>
                                        {sections && sections.map((section) => {
                                            return (
                                                <>
                                                    <option value={section.id}>{section.section_title}</option>
                                                </>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Module Names</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={courseContent.module_title}
                                        onChange={(e) => setCourseContent(prevData => ({
                                            ...prevData,
                                            module_title: e.target.value
                                        }))}
                                    />
                                </div>    

                                <div className="mb-3">
                                    <label className="form-label">Duration(In seconds)</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        value={courseContent.duration}
                                        onChange={(e) => setCourseContent(prevData => ({
                                            ...prevData,
                                            duration: e.target.value
                                        }))}

                                    />
                                </div> 

                                <div className="mb-3">
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input
                                            type="radio"
                                            className="btn-check"
                                            value={courseContent.file_type}
                                            onChange={(e)=>setCourseContent(prevData=>({...prevData,file_type: e.target.value}))}
                                        />
                                        <label className="btn btn-outline-dark">Video</label>

                                        <input
                                            type="radio"
                                            className="btn-check"
                                            value={courseContent.file_type}
                                            onChange={(e)=>setCourseContent(prevData=>({...prevData,file_type: e.target.value}))}
                                        />
                                        <label className="btn btn-outline-dark">Document(PDF,TXT, JPG)</label>

                                        <input
                                            type="radio"
                                            className="btn-check"
                                            value={courseContent.file_type}
                                            onChange={(e)=>setCourseContent(prevData=>({...prevData,file_type: e.target.value}))}
                                        />
                                        <label className="btn btn-outline-dark">Assignment</label>
                                    </div>
                                </div>    
                                <div className="mb-3">
                                    <label className="form-label">Upload Video File</label>
                                    <input
                                        type="file"
                                        className="form-control form-control-sm"
                                        onChange={(e) => setCourseContent(prevData => ({
                                            ...prevData,
                                            media_file: e.target.files[0]
                                        }))}
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
export default AddSectionModule;
