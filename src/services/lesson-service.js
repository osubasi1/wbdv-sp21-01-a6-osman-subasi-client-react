const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/lessons";
const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/modules";

const createLesson = (moduleId, lesson) =>
    fetch(`${MODULE_URL}/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const findLessonsForModule = (moduleId) =>
    fetch(`${MODULE_URL}/${moduleId}/lessons`)
        .then(res => res.json());

const findLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`)
        .then(res => res.json());

const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const deleteLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(res => res.json());

const lessonService = {
    createLesson, findLessonsForModule,
    findLesson, updateLesson, deleteLesson
};
export default lessonService;

