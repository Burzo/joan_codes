import React from "react"
import sid from "shortid"
import Tooltip from "../helpers/Tooltip"

class CodeGenerator extends React.Component {
    constructor() {
        super()

        this.state = {
            randomCode: false,
            inputCollapsed: true
        }
    }

    generateCode = (e) => {
        this.setState({randomCode: sid.generate(), inputCollapsed: false})
    }

    render() {
        return(
            <section className="section-codegenerator">
                <div className="generator">
                    <button onClick={this.generateCode} className="btn generator__button"><span>Generate code</span></button>
                    <div className="generator__input">
                        {this.state.inputCollapsed ? <span className="generator__input--smalltext">Press the button on the left</span>: null}
                        <span key={this.state.randomCode} className="generator__input--text fadein">{this.state.randomCode}</span>
                    </div>
                    <Tooltip>You can either generate a random code or try to enter one of your choosing.</Tooltip>
                </div>
            </section>
        )
    }
}

export default CodeGenerator