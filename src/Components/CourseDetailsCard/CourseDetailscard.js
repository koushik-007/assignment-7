import React from 'react';
import './CourseDetailscard.css'
const CourseDetailscard = (props) => {
    const enrollData = props.courseData;
   
    const { courseName, price, instructor, image, details} = props.courseData;
    return (
        <div>
            <div class="col mb-4">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{courseName}</h5>
                        <h6>{details}</h6>
                        <p>{instructor}</p>
                        <h5 class="card-text font-weight-bold">${price}</h5>
                        <button className="bg-primary" onClick={()=>props.handleEnroll(enrollData)}> Enroll Now!</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetailscard;