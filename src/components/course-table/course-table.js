import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './course-table.style.css'

export default class CourseTable
    extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container-fluid table-layout">
                    <h2>Recent Courses </h2>
                    <div className="col-2"/>

                    <table className="table table-background ">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Owned By</th>
                            <th>Last Modified</th>
                            <th>
                                <Link to="/courses/grid">
                                    <i className="fas fa-2x fa-th float-right grid-btn"/>
                                </Link>
                                <i className="fa fa-sort"/>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.courses.map((course, ndx) =>
                                                       <CourseRow
                                                           updateCourse={this.props.updateCourse}
                                                           deleteCourse={this.props.deleteCourse}
                                                           key={ndx}
                                                           course={course}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}