import React from "react"

const AddCodeFormCalculator = (props) => {
    // € = 9 standard and 19 premium
    // $ = 11 standard and 21 premium
    let {result, newcodeInput, suborpromo, stanorprem, isEURorUSD, numOfMonths, numberOfDevices, didEverythingUpdate} = props.data

    if (newcodeInput !== "" && suborpromo !== "" && numOfMonths !== "" && stanorprem !== "" && numberOfDevices !== "") {
        if (newcodeInput.length < 4) {
            didEverythingUpdate = false;
        } else {
            didEverythingUpdate = true;
            console.log("Everything updated!")
        }
    } else {
        didEverythingUpdate = false;
    }

    numOfMonths = parseInt(numOfMonths)
    numberOfDevices = parseInt(numberOfDevices)
    
    switch (isEURorUSD) {
        case "eur":
            switch (stanorprem) {
                case "stan":
                    result = numOfMonths * numberOfDevices * 9
                    break;
                case "prem":
                        result = numOfMonths * numberOfDevices * 19
                    break;
                default:
                    break;
            }
            isEURorUSD = "€"
            break;
        case "usd":
            switch (stanorprem) {
                case "stan":
                        result = numOfMonths * numberOfDevices * 11
                    break;
                case "prem":
                        result = numOfMonths * numberOfDevices * 21
                    break;
                default:
                    break;
            }
            isEURorUSD = "$"
            break;
        default:
            break;
    }
    return(
        <div className="addcodeform__result">
            {didEverythingUpdate
            ?
            <div className="addcodeform__calculator">
                <div className="addcodeform__calculator__title">
                    {/* <span className="addcodeform__calculator__title">Amount of Joan Credits:</span> */}
                    <div className="addcodeform__calculator__code">
                        <span className="addcodeform__calculator__code--small">&darr;Code&darr;</span>
                        <div className="addcodeform__calculator__code--big">{newcodeInput}</div>
                    </div>
                    <span className="addcodeform__calculator__code--small">&darr;Cost&darr;</span>
                    <span className="addcodeform__calculator__text fadein" key={result}>{isEURorUSD}{result}</span>
                </div>
                <button className="btn addcodeform__submit" type="submit">Save Code</button>
            </div>
            :
            <div>Fill out the form above</div>}
        </div>
    )
}

export default AddCodeFormCalculator