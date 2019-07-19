import React from "react"
import Tooltip from "../helpers/Tooltip"

class AddCodeForm extends React.Component {
    constructor() {
        super();

        this.state = {
			newcodeInput: "",
			suborpromo: "",
            selectValue: "",
        }
    }

    inputChanged = (e) => {
        this.setState({newcodeInput: e.target.value})
    } 

    selectChanged = (e) => {
        this.setState({selectValue: e.target.value})
	}
	
	radioChanged = (e) => {
		this.setState({suborpromo: e.target.value})
	}

    render() {
        return(
            <section className="section-addcodeform">
                <form className="addcodeform" onSubmit={this.formSubmit}>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="newCode">
                            Enter code here:
                            <input onChange={this.inputChanged} name="newCode" value={this.state.newcodeInput}/>
                        </label>
                        <Tooltip>You can enter your own code here if you wish. Hopefully, it doesn't exists yet. Or just create a random one.</Tooltip>
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="suborpromo">
							Code type:
							<div>
								<label>
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "sub"} name="suborpromo" value="sub" type="radio" />
									Subscription code
								</label>
								<label>
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "promo"} name="suborpromo" value="promo" type="radio" />
									Promotional code
								</label>
							</div>
                        </label>
                        <Tooltip>Choose which type of code this is.<br/>Choose PROMO only if the customer didn't pay for it.</Tooltip>
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="suborpromo">
                            Code type:
                            <select onChange={this.selectChanged} value={this.state.selectValue}>
                                <option value="promo" type="checkbox">Promotional code</option>
                                <option value="subscription" type="checkbox">Subscription code</option>
                            </select>
                        </label>
                    </div>
                    <div className="addcodeform__element">
						<label className="addcodeform__toggle" htmlFor="eurorusd">
							<span className="addcodeform__toggle--text">
								€
								<input value="eur" name="eurorusd" type="radio" />
							</span>
							<span className="addcodeform__toggle--text">
								$
								<input value="usd" name="eurorusd" type="radio" />
							</span>
						</label>
                    </div>
                </form>
            </section>
        )
    }
}


export default AddCodeForm