import React from 'react';
import fakeData from '../../FakeData/FakeData';
import CourseDetailscard from '../CourseDetailsCard/CourseDetailscard';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';
import { useState } from 'react';

const Courses = () => {
    const [enroll, setEnroll] = useState([]);

    const handleEnroll = (enrollData)=>{
        const newEnroll = [...enroll, enrollData];
        setEnroll(newEnroll);
    }
    return (
        <div style={{ display: "flex", marginTop: "15px"}}>
            <div style={{ display: "flex", width: "70%" }} >
                <div style={{ marginLeft: "200px" }}>
                    {
                        fakeData.map(data => <CourseDetailscard courseData={data} handleEnroll={handleEnroll}></CourseDetailscard>)
                    }
                </div>
            </div>
            <div>
                <EnrolledCourses enroll={enroll}></EnrolledCourses>
            </div>
        </div>
    );
};

export default Courses;