import React from "react"

const MyCodes = (props) => {
    let data = localStorage.getItem("codes")
    data = JSON.parse(data) || {codes: []}
    data = data.codes.map(e => <div className="mycodes__code" key={e.newcodeInput}>{e.newcodeInput}</div>)
    return(
        <div className="mycodes">
            {data}
        </div>
    )
}

export default MyCodes