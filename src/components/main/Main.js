import React from "react"

import CodeGenerator from "./CodeGenerator"

class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <main>
                <CodeGenerator></CodeGenerator>
                
            </main>
        )
    }
}

export default Main