import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable/editable-item";
import {useParams, withRouter} from "react-router-dom";
import moduleService from "../../services/module-service"
import {
    CREATE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE,
    DELETE_MODULE
} from "../action-types/module-actions";

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse,
        moduleName = 'New Module',
        placeHolder = "New Module"
    }) => {

    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (
        <div className="col-md-3 module-list text-left">
            {/*<h2>Modules {myModules.length}</h2>*/}

            <ul className="nav flex-column nav-pills module-list-pill">
                {
                    myModules.map(module =>
                                      <a className={`list-group-item ${module._id === moduleId
                                                                       ? 'nav-link active mr-2 mb-3'
                                                                       : 'nav-link mr-2 mb-3'}`}>
                                          <EditableItem
                                              to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                              updateItem={updateModule}
                                              deleteItem={deleteModule}
                                              // active={true}
                                              item={module}/>
                                      </a>
                    )
                }
                <li className="form-inline">
                    <input type="text"
                           className="form-control mr-2"
                           placeholder={placeHolder}
                           onChange={event => moduleName = event.target.value}
                    />

                    <button type="submit"
                            className="btn new-course-btn"
                            onClick={() => createModule(courseId, moduleName)}>
                        <i className="fa fa-plus"/>
                    </button>
                </li>
            </ul>
        </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId, moduleName) => {

            moduleService.createModule(courseId, {title: moduleName})
                .then(theActualModule => dispatch({
                                                      type: CREATE_MODULE,
                                                      module: theActualModule
                                                  }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                                             type: DELETE_MODULE,
                                             moduleToDelete: item
                                         })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                                             type: UPDATE_MODULE,
                                             module: module
                                         })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                                                 type: FIND_MODULES_FOR_COURSE,
                                                 modules: theModules
                                             }))
        }
    }
}

export default withRouter(connect(stpm, dtpm)(ModuleList));