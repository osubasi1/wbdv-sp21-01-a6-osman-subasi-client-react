import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import './course-grid.style.css';

const CourseGrid = (
    {
        courses,
        updateCourse,
        deleteCourse,
    }) =>

    <div>
        <div className="container-fluid grid-layout ">
            <Link to="/courses/table">
                <i className="list-btn fas fa-list fa-2x float-right"/>
            </Link>
            <h2>Recent Courses </h2>
            <div className="row ">
                {
                    courses.map((course, ndx) =>
                                    <CourseCard
                                        course={course}
                                        updateCourse={updateCourse}
                                        deleteCourse={deleteCourse}
                                        key={ndx}
                                        title={course.title}
                                        owner={course.owner}
                                        lastModified={course.lastModified}

                                    />
                    )

                }

            </div>

        </div>

    </div>

export default CourseGrid