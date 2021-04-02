import {
    CREATE_TOPIC, FIND_TOPICS_FOR_LESSON, FIND_TOPIC,
    UPDATE_TOPIC, DELETE_TOPIC
} from "../action-types/topic-actions";
import EditableItem from "../editable/editable-item";
import {Link, useParams} from "react-router-dom";
import topicsService from "../../services/topic-service"
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const TopicPills = (
    {
        topics = [],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson,
        topicName = "New Topic"
    }
    ) => {
    const {layout, moduleId, lessonId, topicId, courseId} = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])
    return (
        <div>
            <ul className="nav nav-pills topic-pill-list">
                {
                    topics.map(topic =>
                                   <li className="nav-item mr-2 mb-2">
                                       <a className={` ${topic._id === topicId
                                                         ? "nav-link active" : "nav-link"}`}>
                                           <EditableItem
                                               item={topic}
                                               deleteItem={deleteTopic}
                                               updateItem={updateTopic}
                                               to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}/>
                                       </a>
                                   </li>
                    )
                }

                <li className="nav-item mr-2 mb-2 form-inline">
                    <input type="text"
                           className="form-control mr-1"
                           placeholder="New Topic"
                           onChange={event => topicName = event.target.value}/>

                    <button type="submit"
                            className="btn new-course-btn mr-2"
                            onClick={() => createTopic(lessonId, topicName)}>
                        <i className="fa fa-plus"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    createTopic: (lessonId, topicName) => {
        if (lessonId === undefined) {
            alert("Please first select a lesson to add topic")
        } else {
            topicsService.createTopic(lessonId, {title: topicName})
                .then(topic =>
                          dispatch({
                                       type: CREATE_TOPIC,
                                       topic: topic
                                   }))
        }
    },

    deleteTopic: (item) => {
        topicsService.deleteTopic(item._id)
            .then(status => dispatch({
                                         type: DELETE_TOPIC,
                                         topicToDelete: item
                                     }))
    },
    updateTopic: (topic) => {
        topicsService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                                         type: UPDATE_TOPIC,
                                         topic
                                     }))
    },
    findTopicsForLesson: (lessonId) =>
        topicsService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                                         type: FIND_TOPICS_FOR_LESSON,
                                         topics
                                     }))
})

export default connect(stpm, dtpm)
(TopicPills)