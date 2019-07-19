import React from "react"
import Tooltip from "../helpers/Tooltip"

class AddCodeForm extends React.Component {
    constructor() {
        super();

        this.state = {
			newcodeInput: "",
			suborpromo: "",
            selectValue: "",
            isEURorUSD: "eur"
        }
    }

    inputChanged = (e) => {
        this.setState({newcodeInput: e.target.value})
    } 

    selectChanged = (e) => {
        this.setState({selectValue: e.target.value})
	}
	
	radioChanged = (e) => {
        switch (e.target.name) {
            case "suborpromo":
                this.setState({suborpromo: e.target.value})
                break;
            case "isEURorUSD":
                    this.setState({isEURorUSD: e.target.value})
                break
        }
		this.setState({suborpromo: e.target.value})
	}

    render() {
        return(
            <section className="section-addcodeform">
                <form className="addcodeform" onSubmit={this.formSubmit}>

                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="newCode">
                            Enter code here:
                            <div className="addcodeform__inputcode">
                                <input className="addcodeform__inputcode--label" onChange={this.inputChanged} name="newCode" value={this.state.newcodeInput}/>
                            </div>
                        </label>
                        {/* <Tooltip>You can enter your own code here if you wish. Hopefully, it doesn't exists yet. Or just create a random one.</Tooltip> */}
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="suborpromo">
							Code type:
							<div className="addcodeform__codetype">
								<label className="addcodeform__codetype--radio">
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "sub"} name="suborpromo" value="sub" type="radio" />
									Subscription code
								</label>
								<label className="addcodeform__codetype--radio">
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "promo"} name="suborpromo" value="promo" type="radio" />
									Promotional code
								</label>
							</div>

                        </label>
                        {/* <Tooltip>Choose which type of code this is.<br/>Choose PROMO only if the customer didn't pay for it.</Tooltip> */}
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="suborpromo">
                            Code type:

                            <select className="addcodeform__select" onChange={this.selectChanged} value={this.state.selectValue}>
                                <option value="promo" type="checkbox">Promotional code</option>
                                <option value="subscription" type="checkbox">Subscription code</option>
                            </select>

                        </label>
                    </div>
                    <div className="addcodeform__element">
						<label className="addcodeform__element__label">
                            Currency:
                            <div className="addcodeform__currency">
                                <span className="addcodeform__currency__container">
                                    <label className={"addcodeform__currency--label" + (this.state.isEURorUSD === "eur" ? "--selected" : "")}>
                                        €
                                        <input className="addcodeform__currency--radio" onClick={this.radioChanged} checked={this.state.isEURorUSD === "eur"} value="eur" name="isEURorUSD" type="radio" />
                                    </label>
                                    <label className={"addcodeform__currency--label" + (this.state.isEURorUSD === "usd" ? "--selected" : "")}>
                                        $
                                        <input className="addcodeform__currency--radio" onClick={this.radioChanged} checked={this.state.isEURorUSD === "usd"} value="usd" name="isEURorUSD" type="radio" />
                                    </label>
                                </span>
                            </div>
						</label>
                    </div>
                </form>
            </section>
        )
    }
}


export default AddCodeForm