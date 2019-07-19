import React from "react"
import Tooltip from "../helpers/Tooltip"

class AddCodeForm extends React.Component {
    constructor() {
        super();

        this.state = {
			newcodeInput: "",
			suborpromo: "",
            selectValue: "",
            isEURorUSD: "eur",
            numOfMonths: "",
            stanorprem: "",
            codeValue: 0
        }
    }

    componentDidUpdate() {
        if (this.state.isEURorUSD === "eur") {
            let amount = parseInt(this.state.numOfMonths)
            
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
            case "numOfMonths":
                this.setState({numOfMonths: e.target.value})
                break;
            case "stanorprem":
                this.setState({stanorprem: e.target.value})
                break;
            default:
                break;
        }
	}

    render() {

        // Helper function for creating a large select list - so the HTML isn't too long.
        let createSelectListMonths = (amount) => {
            let list = []
            for (let i = 1; i <= amount; i++) {
                list.push(
                    <label key={i} className={"addcodeform__value--label" + (this.state.numOfMonths === i.toString() ? "--selected" : "")}>
                        {i}
                        <input className="addcodeform__value--radio" onChange={this.radioChanged} checked={this.state.numOfMonths === i.toString()} value={i.toString()} name="numOfMonths" type="radio" />
                    </label>
                )
            }
            return list
        }

        return(
            <section className="section-addcodeform">
                <form autoComplete="off" className="addcodeform" onSubmit={this.formSubmit}>
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
                        <div className="addcodeform__element__label" htmlFor="suborpromo">
                            <div className="addcodeform__element__title">Code length in months:</div>
                            <div className="addcodeform__value">
                                <div className="addcodeform__value__container">
                                    {createSelectListMonths(12)}
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="suborpromo">
                            <div className="addcodeform__element__title">Code type:</div>
							<div className="addcodeform__codetype">
								<label className={"addcodeform__codetype--radio" + (this.state.suborpromo === "sub" ? "--selected" : "")}>
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "sub"} name="suborpromo" value="sub" type="radio" />
									Subscription code
								</label>
								<label className={"addcodeform__codetype--radio" + (this.state.suborpromo === "promo" ? "--selected" : "")}>
									<input onChange={this.radioChanged} checked={this.state.suborpromo === "promo"} name="suborpromo" value="promo" type="radio" />
									Promotional code
								</label>
							</div>
                        </label>
                        {/* <Tooltip>Choose which type of code this is.<br/>Choose PROMO only if the customer didn't pay for it.</Tooltip> */}
                    </div>
                    <div className="addcodeform__element">
                        <label className="addcodeform__element__label" htmlFor="stanorprem">
                        <div className="addcodeform__element__title">Plan type:</div>
                            <div className="addcodeform__plantype">
                                <label className={"addcodeform__plantype--radio" + (this.state.stanorprem === "stan" ? "--selected" : "")}>
                                    <input onChange={this.radioChanged} checked={this.state.stanorprem === "stan"} name="stanorprem" value="stan" type="radio" />
                                    Standard plan
                                </label>
                                <label className={"addcodeform__plantype--radio" + (this.state.stanorprem === "prem" ? "--selected" : "")}>
                                    <input onChange={this.radioChanged} checked={this.state.stanorprem === "prem"} name="stanorprem" value="prem" type="radio" />
                                    Premium plan
                                </label>
                            </div>
                        </label>
                    </div>
                    <div className="addcodeform__element">
						<div className="addcodeform__element__label">
                            <div>Currency:</div>
                            <div className="addcodeform__currency">
                                <div className="addcodeform__currency__container">
                                    <label className={"addcodeform__currency--label" + (this.state.isEURorUSD === "eur" ? "--selected" : "")}>
                                        €
                                        <input className="addcodeform__currency--radio" onChange={this.radioChanged} checked={this.state.isEURorUSD === "eur"} value="eur" name="isEURorUSD" type="radio" />
                                    </label>
                                    <label className={"addcodeform__currency--label" + (this.state.isEURorUSD === "usd" ? "--selected" : "")}>
                                        $
                                        <input className="addcodeform__currency--radio" onChange={this.radioChanged} checked={this.state.isEURorUSD === "usd"} value="usd" name="isEURorUSD" type="radio" />
                                    </label>
                                </div>
                            </div>
						</div>
                    </div>
                </form>
                                            {/* <label>
                                <span>Months:</span>
                                <select className="addcodeform__select" onChange={this.selectChanged} value={this.state.selectValue}>
                                    <option value="promo" type="checkbox">Promotional code</option>
                                    <option value="subscription" type="checkbox">Subscription code</option>
                                </select>
                            </label> */}
            </section>
        )
    }
}


export default AddCodeForm