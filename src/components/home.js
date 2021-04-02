import React from 'react'
import {Link} from "react-router-dom";
import "./home.style.css"

export default () =>
    <>
        <div className="fixed-top header">
            Course Manager Home Page
        </div>
        <div className="list-layout">
            <h2>Available Pages</h2>
            <Link to="/courses/table" className="list-group-item ">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
        </div>
    </>