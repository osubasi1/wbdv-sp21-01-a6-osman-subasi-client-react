const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/courses";
const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/modules";

const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(res => res.json());

const findModule = (courseId) =>
    fetch(`${MODULE_URL}/${courseId}`)
        .then(res => res.json());

const updateModule = (moduleId, module) =>
    fetch(`${MODULE_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const deleteModule = (moduleId) =>
    fetch(`${MODULE_URL}/${moduleId}`, {
        method: 'DELETE'
    })
        .then(res => res.json());

const moduleService = {
    findModule, createModule,
    deleteModule, updateModule,
    findModulesForCourse
};

export default moduleService;