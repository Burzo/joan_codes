import React from "react"

const Tooltip = (props) => {
    return(
        <div className="tooltip">
            <span className="tooltip--text">{props.children}</span>
            <i className="tooltip--icon fas fa-question-circle"></i>
        </div>
    )
}

export default Tooltip