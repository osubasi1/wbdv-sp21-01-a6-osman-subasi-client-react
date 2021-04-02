import React, {useState} from 'react'

const ImageWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (

        <>{
            editing &&
            <>
                <select className="m-2 form-control"
                        onChange={(e) =>
                            setCachedWidget({...cachedWidget, type: e.target.value})}
                        value={cachedWidget.type}>
                    <option value={"HEADING"}>Heading</option>
                    <option value={"PARAGRAPH"}>Paragraph</option>
                    <option value={"IMAGE"}>Image</option>
                    <option value={"LIST"}>List</option>
                </select>
                <i onClick={() => {
                    updateWidget(widget.id, cachedWidget)
                    setEditing(false)
                }}
                   className="fas fa-check  float-right"/>
                <i onClick={() => {
                    deleteWidget(widget.id)
                    setEditing(false)
                }
                }
                   className="fas fa-trash  float-right"/>
                <>
                    <label htmlFor="image-url"> Source URL</label>
                    <input
                        className="form-control"
                        id="image-url"
                        value={cachedWidget.url}
                        onChange={(event) => setCachedWidget({
                                                                 ...cachedWidget,
                                                                 url: event.target.value
                                                             })}
                    />
                    <label htmlFor="image-width"> Image width</label>
                    <input
                        className="form-control"
                        id="image-width"
                        value={cachedWidget.width}
                        onChange={(event) => setCachedWidget({
                                                                 ...cachedWidget,
                                                                 width: event.target.value
                                                             })}
                    />
                    <label htmlFor="image-height"> Image height</label>
                    <input
                        className="form-control"
                        id="image-height"
                        value={cachedWidget.height}
                        onChange={(event) => setCachedWidget({
                                                                 ...cachedWidget,
                                                                 height: event.target.value
                                                             })}
                    />
                </>
            </>
        }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right"/>
                    <img
                        width={cachedWidget.width}
                        height={cachedWidget.height}
                        src={cachedWidget.url}>
                    </img>
                </>
            }

        </>
    )
}

export default ImageWidget;