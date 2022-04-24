import { render } from '@testing-library/react';
import React, { useState } from 'react'
import Experiments from './Experiment'

// import './courses.css'
// let courseRenderFlag = false;
// const renderCourses = () => {
//     courseRenderFlag = true;
// }
// function renderCourses(){
//     // experimentComponent = courseRenderFlag ? <Experiments /> : '';
//     setVisible(true)
// }
const Courses = (props) => {
    const [visible, setVisible] = useState(false)
    const onShow = React.useCallback(() => setVisible(true), [])
    return (
        <div>
            {!visible ? <div className="courses-container">
                <h1 className="courses-text">COURSES</h1>
                <button className="courses-button button" onClick={onShow} >COA</button>
            </div> : <Experiments />}
        </div>
    )
}

export default Courses
