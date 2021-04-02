import CourseManager from "./components/course-manager/course-manager";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";


function App() {
    return (
        <div className="container-fluid">
        <Router>
            <Switch>
                <Route path="/" exact={true}  component={Home}/>
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
    );
}
export default App
