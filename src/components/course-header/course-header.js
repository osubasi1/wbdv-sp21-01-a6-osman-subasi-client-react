import {Link} from "react-router-dom";
 import '../course-manager.style.css'

const CourseHeader = (
    {
        addCourse,
        newCourse,
    }) => {

    const updateForm = (event) => {
        newCourse.title = event.target.value;

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addCourse();
    }
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-light custom-navbar header">
                <button className="navbar-toggler mr-2"
                        type="button">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="navbar-brand d-none d-sm-block" href="/">
                    Course Manager
                </a>
                <form className="form-inline custom-form mr-auto">
                    <input className="form-control mr-sm-2"
                           onChange={updateForm}
                           type="text"
                           id="titleFld"
                           placeholder="New Course Title">

                    </input>

                    <button className="btn btn-danger new-course-btn"
                            onClick={handleSubmit}
                    >
                        <i className="fas fa-plus"/>
                    </button>
                </form>
                <Link to="">
                    <i className="fas fa-2x fa-home house-btn float-right"/>
                </Link>

                <div className="fixed-bottom">
                    <button
                        className="float-right btn btn-danger new-course-btn new-course-btn-bottom"
                        onClick={handleSubmit}>
                        <i className="fas fa-plus"/>
                    </button>
                </div>
            </nav>
        </div>
    )

}
export default CourseHeader