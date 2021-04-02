import {CREATE_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_ALL_WIDGET}
from "../components/action-types/widget-actions";


const initialState = {
    widgets: []
}
const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.widgetToDelete;
                })
            }
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        case FIND_ALL_WIDGET:
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}
export default widgetReducer