import React from "react"

import CodeGenerator from "./CodeGenerator"
import AddCodeForm from "./AddCodeForm"

class Main extends React.Component {

    render() {
        return(
            <div>
                <CodeGenerator></CodeGenerator>
                <AddCodeForm></AddCodeForm>
            </div>
        )
    }
}

export default Main