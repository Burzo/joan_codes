import React from "react"

import CodeGenerator from "./CodeGenerator"
import AddCodeForm from "./AddCodeForm"

class Main extends React.Component {

    render() {
        return(
            <main>
                <CodeGenerator></CodeGenerator>
                <AddCodeForm></AddCodeForm>
            </main>
        )
    }
}

export default Main