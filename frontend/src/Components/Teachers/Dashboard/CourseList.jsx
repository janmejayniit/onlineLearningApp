import axios from "axios";
import React, {useEffect, useState} from "react";

const CourseList = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(()=>{
        fetchCourses(currentPage);
    },[currentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const fetchCourses = async (page) =>{
        setLoading(true);
        try{
            const user_id = localStorage.getItem("id");

            const url=`http://localhost:8000/instructor/course/list/${user_id}/?page=${page}`;
            const response = await axios.get(url)
            const data = await response.data
            setCourses(data.results)
            setLoading(false);
            setTotalPages(10);
        }catch(error){
            console.log(error)
            setError(error);
            setLoading(false);
        }
    }


    return (

        <div className="container mt-3">
            <div className="row mb-2">
                {error && error.error}
                {
                    courses.length > 0 && courses.map((course) => {
                        return (
                            <div key={course.id} className="col-md-4 mb-2">
                                <div className="card">
                                    <img src="/course-banner.png" className="card-img-top" alt="..."/>
                                    <div className="card-header">{course.title}</div>
                                    <div className="card-body">
                                        {course.summary}
                                        <a href={`/instructor/course/${course.slug}`} className="float-end ">view Details</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        {[...Array(totalPages).keys()].map((number) => (
                            <button className="btn btn-dark btn-sm" style={{marginRight: '2px', borderRadius: '0px'}}
                                    key={number + 1}
                                    onClick={() => handlePageChange(number + 1)}
                                    disabled={currentPage === number + 1}
                            >
                                {number + 1}
                            </button>
                        ))}
                    </div>

            </div>
        </div>
    )

}
export default CourseList;