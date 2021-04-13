import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

import moduleReducer from "./reducers/module-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer"
import quizReducer from "./reducers/quiz-reducer";
import questionReducer from "./reducers/question-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";

function App() {
    const reducer = combineReducers({
                                        moduleReducer: moduleReducer,
                                        lessonReducer: lessonReducer,
                                        topicReducer: topicReducer,
                                        widgetReducer: widgetReducer,
                                        quizReducer: quizReducer,
                                        questionReducer: questionReducer
                                    })

    const store = createStore(reducer)
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <Router>
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/courses/:courseId/quizzes" exact={true}>
                            <QuizzesList/>
                        </Route>
                        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                            <Quiz/>
                        </Route>
                        <Route path={[
                            "/courses/:layout/edit/:courseId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                        ]}
                               exact={true}
                               render={(props) => <CourseEditor {...props}/>}>
                        </Route>
                        <Route path="/courses/:layout" exact={true}>
                            <CourseManager/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App
