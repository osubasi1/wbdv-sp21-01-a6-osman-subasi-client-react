import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService from "../../services/widget-service";
import {CREATE_WIDGET, UPDATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_ALL_WIDGET}
from "../action-types/widget-actions";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        findWidgetsForTopic,
        widgets = [],
        updateWidget,
        createWidget,
        deleteWidget
    }) => {
    const {topicId} = useParams();

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
        findWidgetsForTopic(topicId)
    }, [topicId])
    return (
        <div>
            <button type="submit"
                    className="btn new-course-btn mr-2 float-right"
                    onClick={() => createWidget(topicId)}
            >
                <i className="fa fa-plus"/>
            </button>
            <h2>Widget List {widgets.length}</h2>


            <ul className="list-group">
                {
                    widgets.map(widget =>
                                    <li className="list-group-item"
                                        key={widget.id}>
                                        {
                                            widget.type === "HEADING" &&
                                            <HeadingWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                        {
                                            widget.type === "PARAGRAPH" &&
                                            <ParagraphWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                        {
                                            widget.type === "LIST" &&
                                            <ListWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                        {
                                            widget.type === "IMAGE" &&
                                            <ImageWidget
                                                widget={widget}
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}/>
                                        }
                                    </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}
const dtpm = (dispatch) => ({

        createWidget: (tid) => {
            if(tid === undefined){
                alert("Please select a topic to add widget")
            }else {
                widgetService.createWidget(tid, {
                    /*
                    These are the default widget parameters when a new widget is created.
                    Id will be generated automatically either by mysql or java server. Other
                    parameters will be initially null and user can edit them through UI.
                     */
                    type: "HEADING",
                    text: "New Widget",
                    size: 1,
                    url: "https://miro.medium.com/max/1600/0*0ZgS_Z1-5VBdbN3u.png",
                    width: 400,
                    height: 200,
                })
                    .then(widget => dispatch({
                                                 type: CREATE_WIDGET,
                                                 widget: widget
                                             }))
            }
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({
                                                type: FIND_ALL_WIDGETS_FOR_TOPIC,
                                                widgets: widgets
                                            }))
        },
        deleteWidget: (widgetId) => {
            widgetService.deleteWidget(widgetId)
                .then(status => dispatch({
                                             type: DELETE_WIDGET,
                                             widgetToDelete: widgetId
                                         }))
        },
        findAllWidgets: () => {
            widgetService.findAllWidgets()
                .then(widgets => dispatch({
                                              type: FIND_ALL_WIDGET,
                                              widgets: widgets
                                          }))
        },
        updateWidget: (wid, updatedWidget) => {
            widgetService.updateWidget(wid, updatedWidget)
                .then(widget => dispatch({
                                             type: UPDATE_WIDGET,
                                             widget: updatedWidget,
                                             wid: wid
                                         }))
        }

    }
)
export default connect(stpm, dtpm)
(WidgetList)
