import {
    CREATE_MODULE,
    FIND_MODULES_FOR_COURSE,
    UPDATE_MODULE,
    DELETE_MODULE} from "../components/action-types/module-actions";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            const newStateCreate = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newStateCreate;
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }

        case UPDATE_MODULE:
            return {
                modules: state.modules.map(m => {
                    if (m._id === action.module._id) {
                        return action.module;
                    } else {
                        return m;
                    }
                })
            }
        case DELETE_MODULE:
            const newStateDelete = {
                modules: state.modules.filter(m => {
                    if (m._id === action.moduleToDelete._id) {
                        return false;
                    } else {
                        return true;
                    }
                })
            }
            return newStateDelete;
        default:
            return state;
    }

}
export default moduleReducer;