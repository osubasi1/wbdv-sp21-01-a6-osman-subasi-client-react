import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return (

        <> {
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


                <div>
                    <input
                        type="checkbox"
                        checked={cachedWidget.ordered}
                        onChange={(e) =>
                            setCachedWidget({
                                                ...cachedWidget,
                                                ordered: e.target.checked
                                            })}
                    />
                    Ordered
                </div>
                <br/>
                List Item
                <textarea
                    className="form-control"
                    value={cachedWidget.text}
                    onChange={(event) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: event.target.value
                                                })}


                />
            </>
        }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className="fas fa-cog float-right"/>

                    {
                        cachedWidget.ordered &&
                        <ol>
                            {
                                cachedWidget.text.split("\n").map((each) => {
                                    return (
                                        <li>
                                            {each}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                cachedWidget.text.split("\n").map((each) => {
                                    return (
                                        <li>
                                            {each}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }

        </>
    )
}

export default ListWidget;