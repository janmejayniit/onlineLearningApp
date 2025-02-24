import React, { useState } from "react";

const AddSection = ()=>{

    const [courseContent, setCourseContent] = useState({'title':'','course_summary':'','banner':'','course_content':''});

    return(
    <div className="container mt-3">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-header">Add Course Details</div>
                    <div className="card-body">
                        <form>
                             
                            <div className="mb-3">
                                <label className="form-label">Select Course</label>
                                <select className="form-control form-control-sm">
                                    <option>--Choose Course</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Section Names</label>
                                <input type="text" className="form-control form-control-sm"/>
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