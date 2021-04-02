import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to = "/",
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)

    return (
        <>
            {
                !editing &&
                <>
                    {/*<Link className={` ${active ? 'active' : ''}`} to={to}>*/}
                    <Link  to={to} className = "course-title-list">
                        {item.title} {JSON.stringify(active)}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fa fa-edit float-right mt-1 ml-3 mr-2 click-title"/>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                             ...cachedItem,
                                             title: e.target.value
                                         })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check float-right mt-1 click-title"/>
                    { " "}
                    <i onClick={() => deleteItem(item)} className="fas fa-times float-right mt-1 click-title"/>
                </>
            }
        </>
    )
}

export default EditableItem