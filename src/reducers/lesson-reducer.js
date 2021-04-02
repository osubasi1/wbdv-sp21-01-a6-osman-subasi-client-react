import {
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSONS_FOR_MODULE,
    UPDATE_LESSON
} from "../components/action-types/lesson-actions";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            }
        case DELETE_LESSON:
            return {
                    lessons: state.lessons.filter(les => {
                        if (les._id === action.lessonToDelete._id) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                };
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(les => {
                    if (les._id === action.lesson._id) {
                        return action.lesson;
                    } else {
                        return les;
                    }
                })
            }
        default:
            return state;
    }
}

export default lessonReducer;