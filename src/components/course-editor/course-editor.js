import React, { useState, useEffect } from 'react'
import {Link, useParams} from "react-router-dom";
// import moduleReducer from "../../reducers/module-reducer";
// import lessonReducer from "../../reducers/lesson-reducer";
// import topicReducer from "../../reducers/topic-reducer";
// import widgetReducer from "../../reducers/widget-reducer"
// import quizReducer from "../../reducers/quiz-reducer";
// import questionReducer from "../../reducers/question-reducer";
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import courseService from "../../services/course-service";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widgets-list";


// const reducer = combineReducers({
//                                     moduleReducer: moduleReducer,
//                                     lessonReducer: lessonReducer,
//                                     topicReducer: topicReducer,
//                                     widgetReducer: widgetReducer,
//                                     quizReducer: quizReducer,
//                                     questionReducer: questionReducer
//                                 })
//
// const store = createStore(reducer)

const CourseEditor = ({history}) => {

    const [courseTitle, setCourseTitle] = useState('');
    useEffect(() => {
        getTitle(courseId)
    }, []);
    const {layout, courseId} = useParams();

    const getTitle = (courseId) => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title));
    }
    return (
        // <Provider store={store}>
            <div>
                <nav className="navbar navbar-expand-sm  navbar-expand-md fixed-top navbar-light course-editor-header ">
                    <span>
                        {/*<a href= {history.goBack} className="mr-2 mt-1">*/}
                        <Link to = {`/courses/${layout}`} className="fas fa-times cross-editor"/>
                        {/*</a>*/}
                    </span>
                    <span className="course-name float-right cross-editor">
                    {courseTitle}
                    </span>
                    <span>
                            <LessonTabs/>
                    </span>
                </nav>
                        <div className="row">
                            <ModuleList/>
                            <div className="col-md-9 topic-list">
                                <div className="row">
                                    <div className="col-md-12">
                                        <TopicPills/>
                                        <br/>
                                        <WidgetList/>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        // </Provider>
    )
}

export default CourseEditor