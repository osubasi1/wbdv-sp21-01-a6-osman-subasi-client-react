const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/lessons";
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/006013311/topics";

const createTopic = (lessonId, topic) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(res => res.json());

const findTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`)
        .then(res => res.json());

const updateTopic = (topicId, topic) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json());

const deleteTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}`, {
        method: 'DELETE',
    })
        .then(res => res.json());

export default {
    createTopic, findTopicsForLesson,
    findTopic, updateTopic, deleteTopic
};


