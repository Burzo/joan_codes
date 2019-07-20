import React from "react"

const AddCodeFormCalculator = (props) => {
    // € = 9 standard and 19 premium
    // $ = 11 standard and 21 premium
    let {result, newcodeInput, suborpromo, stanorprem, isEURorUSD, numOfMonths, numberOfDevices, didEverythingUpdate} = props.data
    numOfMonths = parseInt(numOfMonths)
    numberOfDevices = parseInt(numberOfDevices)

    if (
    newcodeInput !== ""
    &&
    suborpromo !== ""
    &&
    numOfMonths !== ""
    &&
    stanorprem !== ""
    &&
    numberOfDevices !== "") {
        didEverythingUpdate = true;
        console.log("Everything updated!")
    }
    
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
            break;
        default:
            console.log(result)
            break;
    }
    console.log(result)
    return(
        <div className="calculator">
            <div className="calculator__title">Amount of Joan Credits:</div>
            {didEverythingUpdate ? (`The code is worth ${result} ${isEURorUSD}.`) : <div className="calculator__text">Fill out the form first.</div>}
        </div>
    )
}

export default AddCodeFormCalculator