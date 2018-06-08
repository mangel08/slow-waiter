'use strict'

const sendFood = async (req, res) => {

    try {
        let foodType = req.body.foodType
        let timeToDeliver = req.body.timeToDeliver
        let beverageNumber = req.body.beverage
        const beverageName = assignBeverage(beverageNumber)

        if(beverageName){
            await firstConsoleLog()
            setTimeout(async function () {
                await secondConsoleLog(beverageName)
                setTimeout(async function () {
                await thirdConsoleLog(foodType)
            }, 7000)
        }, 3000)
        await res.status(200).send("Delivery food")
        } else {
            await res.status(400).send("Invalid beverage - the range beverage is 0 - 3")
        }
        
    } catch (err) {
        handleErrorFunction(err)
    }
}

const firstConsoleLog = () => {
    console.log("The waiter has taken your order and will bring your food in 8 seconds")
}

const secondConsoleLog = (beverageName) => {
    console.log(`Here is the ${beverageName} you ordered`)
}

const thirdConsoleLog = (foodType) => {
    console.log(`I am sorry for the delay, here is the ${foodType} you ordered`)
}

const assignBeverage = (beverageNumber) => {
    var beverage;
    if (beverageNumber > 0 && beverageNumber <= 3) {
        switch (beverageNumber) {
            case 0:
                beverage = "water"
                break;
            case 1:
                beverage = "coke"
                break;
            case 2:
                beverage = "soda"
                break;
            case 3:
                beverage = "juice"
                break;
        }
        return beverage;

    } else {
        return false;
    }
}

function handleErrorFunction(err) {
    console.log(err)
    console.lop(err.stack)
    process.exit(1)
}

module.exports = {
    sendFood
}