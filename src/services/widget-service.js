
// const WIDGET_URL =  "https://cs5610-hw5-java-server.herokuapp.com/api"
const WIDGET_URL =  "http://localhost:8080/api/"
const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())


//GETs all widgets as a JSON array from /api/topics/{tid}/widgets for a topic whose ID is tid
const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`)
        .then(res => res.json());


//(optional) GETs all widgets as a JSON array from /api/widgets
const findAllWidgets = () =>
    fetch(`${WIDGET_URL}/widgets`)
        .then(res => res.json())


//(optional) GETs a single widget as a JSON object from /api/widgets/{wid}
const findWidgetById = (wid) => {}

//PUTs to /api/widgets/{wid} a JSON object encoded as a string representing an existing widget
// instance with new values for the attributes for a widget whose ID is wid
const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`,{
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(res => res.json())


// DELETE an existing widget whose ID is wid from /api/widgets/{wid}
const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`,{
        method: 'DELETE'
    }).then((res) => res.json()
    )


export default {
    createWidget, findAllWidgets,
    findWidgetById, findWidgetsForTopic,
    updateWidget, deleteWidget
}





