const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())
export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(res => res.json())
export const deleteCourse = (courseID) =>
    fetch(`${COURSES_URL}/${courseID}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateCourse = (courseID, course) =>
    fetch(`${COURSES_URL}/${courseID}`,{
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
.then(response => response.json())

export default {
    findAllCourses,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse: updateCourse,
    findCourseById

}