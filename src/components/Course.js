import React from 'react'
const Course = (props)=> {
    return (props.finished && <p>{props.name}</p>)
}
export default Course