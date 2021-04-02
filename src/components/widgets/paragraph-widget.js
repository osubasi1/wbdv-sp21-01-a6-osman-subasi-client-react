import React, {useState} from 'react'

const ParagraphWidget = (
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
                            setCachedWidget({...cachedWidget, type:e.target.value})}
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

                <textarea
                    className="form-control"
                    value={cachedWidget.text}
                    onChange={(e) =>
                        setCachedWidget({
                                            ...cachedWidget,
                                            text: e.target.value
                                        })}
                />
            </>
        }
            {
                !editing &&
                <p>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right"/>

                    {cachedWidget.text}
                </p>
            }

        </>
    )
}

export default ParagraphWidget