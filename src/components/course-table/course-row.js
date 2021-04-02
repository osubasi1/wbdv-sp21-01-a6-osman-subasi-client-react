import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./course-table.style.css"

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified = course.lastModified,
        title = course.title,
        owner = course.owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
        <tr className="course">

            <td >

                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit "/>}
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`} className="course-title">
                        {" - "+ title}
                    </Link>
                }

                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fa fa-times float-left"/>
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check float-right"/>}
                {/*{!editing && <i onClick={() => setEditing(true)} className="fas fa-edit float-right"/>}*/}
                {/*{editing && <i onClick={() => saveTitle()} className="fas fa-check float-right"/>}*/}
            </td>
        </tr>
    )
}
export default CourseRow