import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const CourseDetails = () =>{

    const {slug}= useParams()

    const [course, setCourse] = useState()

    const fetchCourseDetail = async () =>{
        try{
            const url=`http://localhost:8080/instructor/course/${slug}`;
            const response = await fetch(url)
            const data = await response.json();
            setCourse(data)
        }catch(error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchCourseDetail();
    },[])

    return(
        <>
            {course && course

            ? course:''

            }
        </>
    )
}
export default CourseDetails;