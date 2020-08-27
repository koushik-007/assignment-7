import React from 'react';

const EnrolledCourses = (props) => {
    const enrollCourses = props.enroll;
    let totalAmount = 0;
    for (let i = 0; i < enrollCourses.length; i++) {
        const price = parseFloat(enrollCourses[i].price);
        totalAmount = totalAmount+price;
        
    }
    return (
        <div style={{border: "1px solid lightgrey", padding: "34px", position: "sticky"}}>
            <h4 className="text-center  font-weight-bold">Enrolled Courses Summery</h4>
            <h4> Courses in Cart : {enrollCourses.length}</h4>
            <h4>total amount to be paid : <span style={{fontSize:"30px",fontWeight: "600"}}>${totalAmount}</span> </h4>
            <br/>
            <button type="button" class="btn btn-lg btn-primary btn-block">Checkout</button>
        </div>
    );
};

export default EnrolledCourses;