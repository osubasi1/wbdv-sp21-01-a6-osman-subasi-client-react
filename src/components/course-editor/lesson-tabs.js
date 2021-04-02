import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable/editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import {
    CREATE_LESSON,
    FIND_LESSONS_FOR_MODULE,
    FIND_LESSONS,
    UPDATE_LESSON,
    DELETE_LESSON
} from "../action-types/lesson-actions";


const LessonTabs = (
    {

        lessons=[],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson,
        lessonName = 'New Lesson'
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

      return(
        <div className="collapse navbar-collapse lesson-list">

            <ul className="navbar-nav course-editor-nav ">
                {
                    lessons.map(lesson =>
                                    <li className={` ${lesson._id === lessonId ? "nav-item active mb-1 mt-1" : "nav-item mb-1 mt-1"}`}>
                                        <a className="nav-link ">
                                        <EditableItem
                                            //active={lesson._id === lessonId}
                                            key={lesson._id}
                                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                            updateItem={updateLesson}
                                            deleteItem={deleteLesson}
                                            item={lesson}/>
                                        </a>
                                    </li>
                    )
                }
            </ul>

                <div className="form-inline float-right">
                    <input type="text"
                           className="form-control mr-2"
                           placeholder="New Lesson"
                           onChange={event => lessonName = event.target.value} />

                    <button type="submit"
                            className="btn new-course-btn"
                            onClick={() => createLesson(moduleId, lessonName)}>
                        <i className="fa fa-plus"/>
                    </button>
                </div>


        </div>
      )
    }

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                                          type: FIND_LESSONS_FOR_MODULE,
                                          lessons
                                      }))
    },
    createLesson: (moduleId, lessonName) => {
        if (moduleId === undefined){
            alert(" Please select a module to add lesson")
        } else {
        lessonService
            .createLesson(moduleId, {title: lessonName})
            .then(lesson => dispatch({
                                         type: CREATE_LESSON,
                                         lesson
                                     }))}
    },

    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                                         type: DELETE_LESSON,
                                         lessonToDelete: item
                                     })),
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                                         type: UPDATE_LESSON,
                                         lesson: lesson
                                     })),
})

export default connect(stpm, dtpm)(LessonTabs)