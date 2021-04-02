
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../course-table/course-table.style.css'

const CourseCard = (
    {
        course,
        updateCourse,
        deleteCourse,
        title,

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
    <div className="col-2">
        <div className="card card-list-first">
            <img src="https://every-tuesday.com/wp-content/uploads/2016/04/courses.jpg"
                 className="card-img-top" alt="..."/>
            <div className="card-body">

                <img src={``}/>
                <Link to={`/courses/grid/edit/${course._id}`}>
                    {/*{course.title}*/}
                </Link>
                {
                    !editing &&
                    <Link to={`/courses/grid/edit/${course._id}`}>
                        {title}
                    </Link>

                }
                <div>
                <i onClick={() => deleteCourse(course)} className="fa fa-trash float-left"/>
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check float-right"/>}

                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit float-right"/>}

                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
                    {" "}
                    {" "}
                </div>
            </div>
        </div>
    </div>
    )
}
export default CourseCard
